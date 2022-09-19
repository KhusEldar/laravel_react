<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $titleParam = $request->query('title', null);
        $posts = Post::when($titleParam, function($query) use ($titleParam){
            return $query->where('title', 'like', '%'.$titleParam.'%');
        })->select('id', 'title', 'desc', 'user_id')->orderBy('id')->with('user')->get();

        return $this->sendResponse($posts->makeHidden(['hidden_path']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        //
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
          'title' => 'required',
          'desc' => 'required',
          'photo' => 'required'
        ]);
        $data['user_id']=1;
        if($validator->fails()){
          return $this->sendError('Error validation', $validator->errors());
        }
        else{
          $post = Post::create($data);
          $files = $request->file('photo');
          foreach ($files as $key=>$value){
            $path = $value->storeAs('images/posts', $post->id.'_'.$key.'.jpg', 'public');
          }
        }
        return $this->sendResponse($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return $this->sendResponse($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
//    public function edit(Post $post)
//    {
//        //
//    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
        return $this->sendResponse($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return $this->sendResponse(null);
    }
}
