import React, { useState, useRef } from 'react'
import { data, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';
import usflag from '../assets/images/usflag.png';
import axiosClient from '../axios-client.js'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const { setUser, setToken } = useStateContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    setErrorMessage('');

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate('/dashboard');
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        } else if (response && response.data && response.data.message) {
          setErrorMessage(response.data.message);
        }
      });
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
        <div className="flex justify-between items-center mb-10">
          <img src={logo} alt="E-nsure Logo" className="h-10" />
          <button className="border px-4 py-1 rounded-md text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Agent
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Log in to E-nsure</h2>
        {errors && Object.keys(errors).map(key => (
          <p key={key}>{errors[key][0]}</p>
        ))}
        {(errors || errorMessage) && (
          <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
            {errors && Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Phone number or email</label>
            <input ref={emailRef} type="text" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Phone number or email" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input ref={passwordRef} type="password" className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" />
              <button type="button" className="absolute right-3 top-2 text-gray-400"></button>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input              
              type="checkbox"
            />Remember Me
            </label>
            <Link to="#" className="text-blue-600 hover:underline">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">Log in</button>
        </form>
        <p className="text-sm mt-4">
          Don’t have an account?
          <Link to="/register" className="text-blue-600 hover:underline">Create account</Link>
        </p>
        <div className="mt-auto pt-10 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>
            Having Difficulties?
            <Link to="#" className="text-blue-600 hover:underline">Contact E-nsure Support</Link>
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <img src={usflag} alt="English" className="w-5 h-5" />
            <span>English</span>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
   </div>
  )
}

export default LoginForm