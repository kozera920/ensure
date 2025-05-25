import React from 'react'
import crash from '../assets/images/crash.png'

const LoginSlide = () => (
  <div className="hidden md:flex w-1/2 bg-blue-900 text-white flex-col justify-center items-center p-10">
    <img src={crash} alt="Crash Illustration" className="max-w-xs mb-8" />
    <h3 className="text-xl font-semibold mb-2">File & Track Your Claims</h3>
    <p className="text-center text-sm max-w-md leading-relaxed">
      Submit claims and monitor status in real-time.<br />
      Say goodbye to paperwork!
    </p>
    <div className="flex justify-center mt-6 space-x-2">
      <span className="w-3 h-3 bg-white rounded-full block"></span>
      <span className="w-3 h-3 bg-white/50 rounded-full block"></span>
    </div>
  </div>
)

export default LoginSlide