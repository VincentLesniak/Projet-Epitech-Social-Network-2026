<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Group;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Créer 10 utilisateurs
        $users = User::factory(10)->create();

        // Créer quelques groupes manuellement (car la clé est un nom)
        $groups = collect(['Laravel France', 'React Devs', 'Gaming Area'])->map(function ($name) {
            return Group::create([
                'group_name' => $name,
                'description' => "Bienvenue dans le groupe $name !",
            ]);
        });

        // Créer des posts pour chaque utilisateur
        $users->each(function ($user) use ($groups) {
            $posts = Post::factory(3)->create([
                'user_id' => $user->id,
                'group_id' => $groups->random()->group_name, // On assigne un groupe aléatoire
            ]);

            // Ajouter des likes et des commentaires sur ces posts
            $posts->each(function ($post) use ($user) {
                // Créer 2 commentaires par post
                Comment::factory(2)->create([
                    'post_id' => $post->id,
                    'user_id' => User::all()->random()->id,
                ]);

                // Ajouter des likes aléatoires (table pivot liked)
                $post->likers()->attach(
                    User::all()->random(rand(1, 5))->pluck('id')
                );
            });

            // Faire rejoindre des groupes aux utilisateurs (table pivot user_groups)
            $user->groups()->attach(
                $groups->random(rand(1, 2))->pluck('group_name')
            );
        });
    }
}