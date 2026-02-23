<?php
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LikeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
#region Auth
Route::post('/register', [AuthController::class,'register']);
#endregion
#region post(table)
// route pour liké un post
Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->middleware('auth:sanctum');
// route pour récupérer les posts
Route::get('posts', [\App\Http\Controllers\PostController::class, 'index']);
// route pour créer un post
Route::post('posts', [\App\Http\Controllers\PostController::class, 'store'])->middleware('auth:sanctum');
// montre un post spécifique
Route::get('posts/{post}', [\App\Http\Controllers\PostController::class, 'show']);
//update un post
Route::put('posts/{post}', [\App\Http\Controllers\PostController::class, 'update'])->middleware('auth:sanctum');
//delete un post
Route::delete('posts/{post}', [\App\Http\Controllers\PostController::class, 'destroy'])->middleware('auth:sanctum');
#endregion

