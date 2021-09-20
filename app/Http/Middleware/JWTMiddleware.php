<?php

namespace App\Http\Middleware;

use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use JWTAuth;
use Exception;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Tymon\JWTAuth\Exceptions\JWTException;

class JWTMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['status' => 'Token is Invalid']);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                $newToken = $this->tryRefresh($request);

                if ($newToken) {
                    $request->headers->set('Authorization', 'Bearer ' . $newToken);
                }
                $response = $next($request);
                if ($newToken) {
                    // send new token back to frontend
                    $response->headers->set('Authorization', $newToken);
                } else {
                    return response()->json(['status' => 'Token has Expired']);
                }
            } else {
                return response()->json(['status' => 'Authorization Token not found']);
            }
        }
        return $next($request);
    }
    protected function tryRefresh()
    {
        try {

            $token = $this->auth->parseToken()->refresh();
            return $token;
        } catch (JWTException $e) {

            // token expired? force logout on frontend
            throw new AuthenticationException();
        }

        return null;
    }
}
