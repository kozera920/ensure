<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
         $rules = [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required',
            'terms' => 'accepted',
            'user_type' => 'required|in:individual,company',
        ];

        if (request()->input('user_type') === 'individual') {
            $rules['name'] = 'required|string|max:255';
            $rules['nida'] = 'required|string|max:20'; // Adjust max length as needed
        } else {
            $rules['company_name'] = 'required|string|max:255';
            $rules['tin'] = 'required|string|max:20'; // Adjust max length as needed
            $rules['phone'] = 'required|string|max:20';
        }

        return $rules;
    }
}
