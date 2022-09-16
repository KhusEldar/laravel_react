<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable=['title', 'desc'];

//    protected $guarded = [];

    protected $appends=['file_path', 'hidden_path'];

    public  function getFilePathAttribute(){
        return 'storage/images/posts/'.$this->id.'.jpg';
    }
    public  function getHiddenPathAttribute(){
    return 'hidden/images/posts/'.$this->id.'.jpg';
}
}
