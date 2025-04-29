<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/project', function () {
    return Inertia::render('Project');
});

Route::get('/about', function () {
    return Inertia::render('About');
});
