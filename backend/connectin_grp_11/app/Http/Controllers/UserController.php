<?php

namespace App\Http\Controllers;

use App\Models\User; // le modèle pour parler à la table 'users'
use Illuminate\Http\Request; // l'outil pour lire ce que React nous envoie
use Illuminate\Support\Facades\Gate; // sécurité qui va lire UserPolicy
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{

    public function index()
    {
        // récupère absolument tous les utilisateurs de la base de données.
        $users = User::all();

        // on met tout dans le JSON et on l'envoie à React avec le code 200
        return response()->json([
            'message' => 'Voici la liste de tous les utilisateurs',
            'data' => $users
        ], 200);
    } // utile pour la modale d'invitation dans les groupes et lancer une recherche ciblée, rechercher quelqu'un dans une barre de recherche, etc

    public function show(User $user)
    {
        //(User $user) permet de récupérer la "totalité" des informations de l'utilisateur en utilisant le principe de Route Model Binding

        // Gate lit la règle 'view' dans UserPolicy sur le profil $user.
        Gate::authorize('view', $user);

        // Si le gate est passé, le code continue ici et le profil trouvé est renvoyé
        return response()->json([
            'message' => 'Profil trouvé',
            'data' => $user
        ], 200);
    }

    public function update(Request $request, User $user)
    {
        // On demande à gate de lire la règle 'update' de UserPolicy et de comparer le visiteur avec la cible $user
        // S'ils sont différents, Gate le code s'arrête et le serveur renverra une 403
        Gate::authorize('update', $user);

        // Si l'user a le droit d'être là, on vérifie que ce qu'il a tapé est correct.
        $validated = $request->validate([
            'first_name'    => 'sometimes|required|string|max:50',
            'last_name'     => 'sometimes|required|string|max:50',
            'mail'          => 'sometimes|required|email|unique:users,mail,' . $user->id,
            'birthdate'     => 'sometimes|date',
            'profil_pic'    => 'sometimes|image|mimes:jpeg,png,jpg,webp|max:2048'
            // 'sometimes' veut dire : "S'il n'envoie pas de prénom, on garde l'ancien.
            // et obligé de ne pas le laisser vide par le required
        ]);

        // Si un fichier "profil_pic" a été envoyé
        if ($request->hasFile('profil_pic')) {

            // que l'utilisateur avait déjà une photo, on la supprime du disque
            if ($user->profil_pic) {
                Storage::disk('public')->delete($user->profil_pic);
            }

            // sauvegarde la nouvelle image dans un dossier (ex: "profil_pics")
            $cheminImage = $request->file('profil_pic')->store('profil_pics', 'public');

            // puis ajoute ce chemin dans les données à sauvegarder en BDD
            $validated['profil_pic'] = $cheminImage;
        }

        // mise à jour du profil tu Update les données qui sont dans $validated vers $user
        $user->update($validated);

        //envoie la réponse 
        return response()->json([
            'message' => 'Profil mis à jour avec succès',
            'data' => $user
        ], 200);
    }

    public function destroy(User $user)
    {
        // gate de lit la règle 'delete' de UserPolicy par rapport à la cible $user
        Gate::authorize('delete', $user);

        // gate a dit oui, on efface l'utilisateur de la base de données.
        $user->delete();

        return response()->json([
            'message' => 'Le compte a été définitivement supprimé.'
        ], 200);
    }

    public function deleteProfilPic(User $user)
    {

        Gate::authorize('update', $user);

        if ($user->profil_pic) {
            Storage::disk('public')->delete($user->profil_pic);
        }

        $user->update(['profil_pic' => null]);

        return response()->json([
            'message' => 'Photo de profil supprimée avec succès',
            'data' => $user
        ], 200);
    }
}
