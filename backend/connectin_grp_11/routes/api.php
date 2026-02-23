<?php
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LikeController;

Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->middleware('auth:sanctum');
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class, 'login']);


// Le groupe protégé par "auth:sanctum", tout ce qui se fait avec la nécessité d'être connécté se fait ici
Route::middleware('auth:sanctum')->group(function () {
    
    route::post('/logout', [AuthController::class, 'logout']);

});