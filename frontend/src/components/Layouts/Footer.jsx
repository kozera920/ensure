import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-10 text-sm text-gray-500 flex justify-between p-6">
          <div className="space-x-4">
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Terms of Use</Link>
          </div>
          <div>
            &copy; 2025 <Link to="#" className="text-custom-blue">E-nsure</Link>. All Rights Reserved.
          </div>
    </footer>
  )
}

export default Footer