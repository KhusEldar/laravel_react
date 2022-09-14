<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends BaseController
{

//    public function index()
//    {
//        //return User::all();
//    }

//    public function store(Request $request)
//    {
//        $data = $request->all();
//        return sendResponse(User::create($data));
//    }

    public function show(User $user)
    {
        return $this->sendResponse($user);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return $this->sendResponse($user);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return $this->sendResponse(null);
    }
}
