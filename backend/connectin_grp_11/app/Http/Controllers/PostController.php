<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // On récupère les posts avec l'utilisateur et on compte les likes
        $posts = Post::with('user:id,first_name,last_name') // On ne prend que les colonnes nécessaires
            ->withCount('likers')
            ->latest() // Les plus récents en premier
            ->get();

        return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
            'group_id' => 'nullable|exists:groups,group_name',
            'post_picture' => 'nullable|image|max:2048',
        ]);

        // Logique d'upload (si image présente)
        $imagePath = null;
        if ($request->hasFile('post_picture')) {
            $imagePath = $request->file('post_picture')->store('posts', 'public');
        }

        $post = Post::create([
            'message' => $validated['message'],
            'group_id' => $validated['group_id'],
            'user_id' => auth()->id(),
            'post_picture' => $imagePath, // On stocke le chemin
        ]);

        // Réponse en json avec le post créé
        return response()->json([
            'message' => 'Post créé avec succès !',
            'data' => $post
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
