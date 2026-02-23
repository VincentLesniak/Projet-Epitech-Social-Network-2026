<?php
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LikeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->middleware('auth:sanctum');
Route::post('/register', [AuthController::class,'register']);
