import React, { useState, useRef } from 'react'
import { data, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import axiosClient from '../axios-client.js'
import { useStateContext } from '../contexts/ContextProvider'

const RegisterForm = () => {
   const [tab, setTab] = useState('individual');
   const [errors, setErrors] = useState(null);

  // Refs for form inputs
  const nameRef = useRef();
  const nidaRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const termsRef = useRef();
  
  const companyNameRef = useRef();
  const tinRef = useRef();
  const phoneRef = useRef();
  const companyEmailRef = useRef();
  const companyPasswordRef = useRef();
  const companyPasswordConfirmationRef = useRef();
  const companyTermsRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(null);

    let payload = {
      user_type: tab,
      terms: tab === 'individual' ? termsRef.current.checked : companyTermsRef.current.checked
    };

    if (tab === 'individual') {
      payload = {
        ...payload,
        name: nameRef.current.value,
        nida: nidaRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
      };
    } else {
      payload = {
        ...payload,
        company_name: companyNameRef.current.value,
        tin: tinRef.current.value,
        phone: phoneRef.current.value,
        email: companyEmailRef.current.value,
        password: companyPasswordRef.current.value,
        password_confirmation: companyPasswordConfirmationRef.current.value,
      };
    }


    axiosClient.post('/register', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
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
      
      {errors && (
        <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}

     {tab === 'individual' ? (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              ref={nameRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Full Name"
              required
            />
            {errors?.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">ID Number (NIDA)</label>
            <input
              ref={nidaRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="NIDA Number"
              required
            />
            {errors?.nida && <p className="text-red-500 text-sm">{errors.nida[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              ref={emailRef}
              type="email"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Email address"
              required
            />
            {errors?.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Password"
              required
            />
            {errors?.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              ref={passwordConfirmationRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Confirm Password"
              required
            />
          </div>
          <label className="flex items-center text-sm gap-2">
            <input
              ref={termsRef}
              type="checkbox"
              required
            />
            I agree to the <Link to="#" className="text-blue-600 underline">Privacy Policy</Link> and <Link to="#" className="text-blue-600 underline">Terms of Use</Link>
            {errors?.terms && <p className="text-red-500 text-sm">{errors.terms[0]}</p>}
          </label>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
            Create Account
          </button>
        </form>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Company Name</label>
            <input
              ref={companyNameRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Company Name"
              required
            />
            {errors?.company_name && <p className="text-red-500 text-sm">{errors.company_name[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">TIN Number</label>
            <input
              ref={tinRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="TIN Number"
              required
            />
            {errors?.tin && <p className="text-red-500 text-sm">{errors.tin[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              ref={phoneRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Phone Number"
              required
            />
            {errors?.phone && <p className="text-red-500 text-sm">{errors.phone[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              ref={companyEmailRef}
              type="email"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Email address"
              required
            />
            {errors?.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              ref={companyPasswordRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Password"
              required
            />
            {errors?.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              ref={companyPasswordConfirmationRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Confirm Password"
              required
            />
          </div>
          <label className="flex items-center text-sm gap-2">
            <input
              ref={companyTermsRef}
              type="checkbox"
              required
            />
            I agree to the <Link to="#" className="text-blue-600 underline">Privacy Policy</Link> and <Link to="#" className="text-blue-600 underline">Terms of Use</Link>
            {errors?.terms && <p className="text-red-500 text-sm">{errors.terms[0]}</p>}
          </label>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
            Create Account
          </button>
        </form>
      )}

      <p className="text-sm mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
      </p>
    </div>
  );
};


export default RegisterForm