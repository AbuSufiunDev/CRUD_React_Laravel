<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/students', [StudentController::class, 'index'])->name('studenst');
Route::post('/students', [StudentController::class, 'store'])->name('store');

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');

