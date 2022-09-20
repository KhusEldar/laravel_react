<?php
   
namespace App\Http\Controllers;
   
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
use \Laravel\Sanctum\PersonalAccessToken;
   
class AuthController extends Controller
{
    public function signin(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $authUser = Auth::user();
            $token = $authUser->createToken('MyAuthApp')->plainTextToken;
            $success['token'] =  $token;
            $success['name'] =  $authUser->name;

            setcookie('AccessToken',$token, time()+config('sanctum.expiration')*60 ,"/",null,false,true);
            return $this->sendResponse($success, 'User signed in');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised'], 401);
        }
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Error validation', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $token = $user->createToken('MyAuthApp')->plainTextToken;
        $success['token'] = $token;
        $success['name'] =  $user->name;

        setcookie('AccessToken',$token, time()+config('sanctum.expiration')*60,"/",null,false,true);
        return $this->sendResponse($success, 'User created successfully.');
    }

  public function signout(Request $request)
  {
    $token = $request->cookie('AccessToken');
    $personalAccessToken = PersonalAccessToken::findToken($token);
    if(isset($personalAccessToken)){
      //$user = $personalAccessToken->tokenable;
      $personalAccessToken->delete();
    }
    setcookie('AccessToken', "", time() - config('sanctum.expiration')*60, '/',null,false, true);

    return $this->sendResponse(null, 'User logout successfully.');
  }

}
