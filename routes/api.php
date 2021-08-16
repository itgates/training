<?php

use App\Http\Controllers\TodoController;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Thread;
use App\Models\Todo;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/threads/{thread}', function (Request $request, Thread $thread ) {
  return $thread->load(['owner', 'replies.owner']);
});

Route::middleware('auth:sanctum')->post('/threads/{thread}/replies', function (Request $request, Thread $thread ) {
  Reply::create([
    'body' => $request->body,
    'user_id' => auth()->id(),
    'thread_id' => 1
  ]);
});

Route::middleware('auth:sanctum')->put('/replies/{reply}', function (Request $request, Reply $reply ) {
  return $reply->update(['body' => $request->body]);
});

Route::middleware('auth:sanctum')->get('/tasks', function () {
  return Todo::with('subtodos')->get();
});
