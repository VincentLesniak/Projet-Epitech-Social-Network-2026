<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {

    public function register(RegisterRequest $request) {

        $validatedData = $request->validated();


        $user = User::create([
            'first_name' => $validatedData['first_name'],
            'last_name'  => $validatedData['last_name'],
            'mail'       => $validatedData['mail'],
            'birthdate'  => $validatedData['birthdate'],
            'password'   => $validatedData['password'],
            'role'       => 1,
        ]);

       
        $token = $user->createToken('auth_token')->plainTextToken;
        //La fonction createToken() fabrique un "Objet" PHP complexe. 
        //Le front s'en fiche de PHP, il a juste besoin d'une simple chaîne de caractères (comme 1|abc123def456...) pour la mettre dans le navigateur.
        //Cette propriété extrait le texte brut du jeton pour qu'on puisse l'envoyer facilement sur internet.

        
        return response()->json([
            'message' => 'Inscription réussie !',
            'user'    => $user,
            'token'   => $token
        ], 201);
    }


    public function login(LoginRequest $request) {
        // On récupère le mail et le mot de passe validés dans LoginRequest
        $identification = $request->validated();

        // On cherche l'utilisateur dans la base de données avec à son mail
        $user = User::where('mail', $identification['mail'])->first();

        // On vérifie si l'utilisateur existe ET si le mot de passe est le bon
        // Hash::check compare le mot de passe tapé avec celui crypté en BDD
        if (!$user || !Hash::check($identification['password'], $user->password)) {
            return response()->json([
                'message' => 'Les identifiants sont incorrects.'
            ], 401); // 401 = Accès refusé
        }

        // si c'est bon on lui crée un Token
        $token = $user->createToken('auth_token')->plainTextToken;

        // on renvoie au front avec les infos de l'user le token et un message de confirmation et validation par 200 status HTTP
        return response()->json([
            'message' => 'Connexion réussie !',
            'user'    => $user,
            'token'   => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        /*On récupère l'utilisateur qui a fait la requête,
        on cible le Token exact qu'il est en train d'utiliser,
        et on le supprime de la base de données.*/
        $request->user()->currentAccessToken()->delete();

        // On renvoie un petit message de confirmation
        return response()->json([
            'message' => 'Déconnexion réussie.'
        ], 200);
    }
}
