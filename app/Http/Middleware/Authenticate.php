<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http;
use Closure;


class Authenticate extends Middleware
{

    public function handle($request,$next,...$guards)
    {
        $token = $request->bearerToken();
        if(empty($token)){
            $token = $request->cookie('AccessToken');
            if(empty($token)){
                return response()->json(null,401);
            }
            $request -> headers->set('Authorization', 'Bearer '.$token);
        }

        return $next($request);
    }


    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
