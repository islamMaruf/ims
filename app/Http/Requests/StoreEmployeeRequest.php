<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:employees|max:255',
            'phone' => 'required|string|unique:employees|max:15',
            'address' => 'required|string|max:512',
            'nid' => 'nullable|string|max:13',
            'salary' => 'required|string|max:9',
            'joining_date' => 'nullable|date'
        ];
    }
}
