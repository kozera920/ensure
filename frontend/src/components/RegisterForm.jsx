import React, { useState, useRef } from 'react'
import { data, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import axiosClient from '../axios-client.js'
import { useStateContext } from '../contexts/ContextProvider'

const RegisterForm = () => {
  const [tab, setTab] = useState('individual');

  // Individual refs
  const nidaRef = useRef();
  const namesRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // Company refs
  const tinRef = useRef();
  const companyNameRef = useRef();
  const companyPhoneRef = useRef();
  const companyEmailRef = useRef();
  const companyPasswordRef = useRef();
  const companyPasswordConfirmRef = useRef();

  const {setUser,setToken} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();

    let payload = {};
    if (tab === 'individual') {
      payload = {
        nida: nidaRef.current.value,
        names: namesRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_Confirm: passwordConfirmRef.current.value,
      };
    } else {
      payload = {
        tin: tinRef.current.value,
        companyName: companyNameRef.current.value,
        phone: companyPhoneRef.current.value,
        email: companyEmailRef.current.value,
        password: companyPasswordRef.current.value,
        password_Confirm: companyPasswordConfirmRef.current.value,
      };
    }

    // Handle form submission logic here
    //console.log(payload);

    axiosClient.post('/register', payload)
      .then(response => {
        console.log('Registration successful:', response.data);
        // Optionally redirect or show a success message
        setUser(response.data.user)
        setToken(response.data.token)
      })
      .catch(error => {
        console.error('Registration error:', error.response ? error.response.data : error.message);
        // Optionally show an error message to the user
      });

  };

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
      <div className="flex justify-between items-center mb-10">
        <img src={logo} alt="E-nsure Logo" className="h-10" />
        <button className="border px-4 py-1 rounded-md text-sm flex items-center gap-1">
          {/* ...icon... */}
          Agent
        </button>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create your account</h2>
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setTab('individual')}
          className={`py-2 px-4 rounded-md ${tab === 'individual' ? 'bg-blue-900 text-white' : 'text-gray-600 border'}`}
        >
          Individual
        </button>
        <button
          onClick={() => setTab('company')}
          className={`py-2 px-4 rounded-md ${tab === 'company' ? 'bg-blue-900 text-white' : 'text-gray-600 border'}`}
        >
          Company
        </button>
      </div>
      {tab === 'individual' ? (
        <form onSubmit={onSubmit} id="form-individual" className="space-y-4">
          <div>
            <label className="block text-sm mb-1">ID Number</label>
            <input ref={nidaRef} type="text" className="w-full border rounded-md px-4 py-2" placeholder="ID Number" />
          </div>
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input ref={namesRef} type="text" className="w-full border rounded-md px-4 py-2" placeholder="Full Name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input ref={emailRef} type="email" className="w-full border rounded-md px-4 py-2" placeholder="Email address" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input ref={passwordRef} type="password" className="w-full border rounded-md px-4 py-2" placeholder="Password" />
          </div>
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input ref={passwordConfirmRef} type="password" className="w-full border rounded-md px-4 py-2" placeholder="Confirm Password" />
          </div>
          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" />
            I agree to the <Link href="#" className="text-blue-600 underline">Privacy Policy</Link> and <Link href="#" className="text-blue-600 underline">Terms of Use</Link>
          </label>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">Create Account</button>
        </form>
      ) : (
        <form onSubmit={onSubmit} id="form-company" className="space-y-4">
          <div>
            <label className="block text-sm mb-1">TIN Number</label>
            <input ref={tinRef} type="text" className="w-full border rounded-md px-4 py-2" placeholder="TIN Number" />
          </div>
          <div>
            <label className="block text-sm mb-1">Company Name</label>
            <input ref={companyNameRef} type="text" className="w-full border rounded-md px-4 py-2" placeholder="Company Name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input ref={companyPhoneRef} type="text" className="w-full border rounded-md px-4 py-2" placeholder="Phone number" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input ref={companyEmailRef} type="email" className="w-full border rounded-md px-4 py-2" placeholder="Email address" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input ref={companyPasswordRef} type="password" className="w-full border rounded-md px-4 py-2" placeholder="Password" />
          </div>
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input ref={companyPasswordConfirmRef} type="password" className="w-full border rounded-md px-4 py-2" placeholder="Confirm Password" />
          </div>
          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" />
            I agree to the <Link href="#" className="text-blue-600 underline">Privacy Policy</Link> and <Link href="#" className="text-blue-600 underline">Terms of Use</Link>
          </label>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">Create Account</button>
        </form>
      )}
      <p className="text-sm mt-4">
        Already have an account?
        <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
      </p>
    </div>
  )
}

export default RegisterForm