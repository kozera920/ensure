<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Citizen;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $data = [
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'user_type' => $validated['user_type'],
        ];

        if ($validated['user_type'] === 'individual') {
            $data['name'] = $validated['name'] ?? null;
            $data['nida'] = $validated['nida'] ?? null;
            $data['passport'] = $validated['passport'] ?? null;
            $data['phone'] = $validated['phone'];
        } else {
            $data['company_name'] = $validated['company_name'];
            $data['tin'] = $validated['tin'];
            $data['phone'] = $validated['phone'];
        }

        $user = User::create($data);

        //fetch data
         if (isset($validated['nida'])) {
            $response = Http::get('https://crm.sanlamvie.rw/api/citizens/', [
                'DocNumber' => $validated['nida']
            ]);

            if ($response->ok()) {
                $citizenData = $response->json();

                Citizen::create([
                    'user_id'      => $user->id,
                    'nida'         => $validated['nida'],
                    'surnames'     => $citizenData['surnames'] ?? null,
                    'fore_name'    => $citizenData['foreName'] ?? null,
                    'date_of_birth'=> \Carbon\Carbon::createFromFormat('d/m/Y', $citizenData['dateOfBirth'])->format('Y-m-d'),
                    'nationality'  => $citizenData['nationality'] ?? null,
                    'province'     => $citizenData['province'] ?? null,
                    'district'     => $citizenData['district'] ?? null,
                    'sector'       => $citizenData['sector'] ?? null,
                    'cell'         => $citizenData['cell'] ?? null,
                    'village'      => $citizenData['village'] ?? null,
                    'sex'          => $citizenData['sex'] ?? null,
                    'civil_status' => $citizenData['civilStatus'] ?? null,
                ]);
            }
        }

        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $login = $request->input('login');
        $password = $request->input('password');

        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'phone';

        if (!Auth::attempt([$field => $login, 'password' => $password])) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }


    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
