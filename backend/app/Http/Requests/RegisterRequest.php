<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required',
            'terms' => 'accepted',
            'user_type' => 'required|in:individual,company',
        ];

        if ($this->input('user_type') === 'individual') {
            $rules['name'] = 'required|string|max:255';
            $rules['phone'] = 'required|string|max:20';
            $rules['nida'] = 'nullable|required_without:passport|string|unique:users,nida|max:20';
            $rules['passport'] = 'nullable|required_without:nida|string|unique:users,passport|max:20';
        }

        if ($this->input('user_type') === 'company') {
            $rules['company_name'] = 'required|string|max:255';
            $rules['tin'] = 'required|string|max:20|unique:users,tin';
            $rules['phone'] = 'required|string|max:20';
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'nida.required_without' => 'Either NID or Passport number is required.',
            'passport.required_without' => 'Either Passport or NID number is required.',
            'terms.accepted' => 'You must accept the terms and privacy policy.',
        ];
    }
}
