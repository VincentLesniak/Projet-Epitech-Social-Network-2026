<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;

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
}
