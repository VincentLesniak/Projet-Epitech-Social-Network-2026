<?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LikeController;

Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->middleware('auth:sanctum');
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class, 'login']);