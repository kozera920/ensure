import React from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginSlide from '../components/LoginSlide'

const Register = () => (
  <div className="min-h-screen flex">
    <RegisterForm />
    <LoginSlide />
  </div>
)

export default Register