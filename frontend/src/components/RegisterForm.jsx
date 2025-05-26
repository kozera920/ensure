import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const RegisterForm = () => {
  const [tab, setTab] = useState('individual')

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
        <form id="form-individual" className="space-y-4">
            <div>
                <label className="block text-sm mb-1">ID Type</label>
                <select className="w-full border rounded-md px-4 py-2">
                <option value="national-id">National ID</option>
                <option value="passport">Passport</option>
                </select>
            </div>

            <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input type="text" className="w-full border rounded-md px-4 py-2" placeholder="Phone number" />
            </div>

            <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full border rounded-md px-4 py-2" placeholder="Email address" />
            </div>

            <div>
                <label className="block text-sm mb-1">Password</label>
                <input type="password" className="w-full border rounded-md px-4 py-2" placeholder="Password" />
            </div>

            <div>
                <label className="block text-sm mb-1">Confirm Password</label>
                <input type="password" className="w-full border rounded-md px-4 py-2" placeholder="Confirm Password" />
            </div>

            <label className="flex items-center text-sm gap-2">
                <input type="checkbox" />
                I agree to the <Link href="#" className="text-blue-600 underline">Privacy Policy</Link> and <Link href="#" className="text-blue-600 underline">Terms of Use</Link>
            </label>

            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">Create Account</button>
        </form>
      ) : (
        <form id="form-company" className="space-y-4 hidden">
            <div>
                <label className="block text-sm mb-1">TIN Number</label>
                <input type="text" className="w-full border rounded-md px-4 py-2" placeholder="TIN Number" />
            </div>

            <div>
                <label className="block text-sm mb-1">Company Name</label>
                <input type="text" className="w-full border rounded-md px-4 py-2" placeholder="Company Name" />
            </div>

            <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input type="text" className="w-full border rounded-md px-4 py-2" placeholder="Phone number" />
            </div>

            <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full border rounded-md px-4 py-2" placeholder="Email address" />
            </div>

            <div>
                <label className="block text-sm mb-1">Password</label>
                <input type="password" className="w-full border rounded-md px-4 py-2" placeholder="Password" />
            </div>

            <div>
                <label className="block text-sm mb-1">Confirm Password</label>
                <input type="password" className="w-full border rounded-md px-4 py-2" placeholder="Confirm Password" />
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
        <Link to="#" className="text-blue-600 hover:underline">Log in</Link>
      </p>
    </div>
  )
}

export default RegisterForm