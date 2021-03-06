<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthController@login')->middleware('api');
Route::group(['middleware' => 'api', 'jwt.verify'], function ($router) {
    Route::post('logout', 'AuthController@logout');
    Route::post('sign-up', 'AuthController@signUp');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::resource('employee', 'EmployeeController');
});
