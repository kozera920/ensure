import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Aside from '../Layouts/Aside.jsx';
import Header from '../Layouts/Header.jsx';
import WelcomeMessage from '../topbanners/WelcomeMessage.jsx';

const DefaultLayout = () => {
 

  return (
    <div id="defaultLayout" className="flex min-h-screen">
      {/* Sidebar */}
      <Aside/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-custom-dashboard">
        <Header/>
        <main className="flex-1 p-6">
          <WelcomeMessage/>          
          <Outlet />
        </main>
        <footer className="mt-10 text-sm text-gray-500 flex justify-between p-6">
          <div className="space-x-4">
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Terms of Use</Link>
          </div>
          <div>
            &copy; 2025 <Link to="#" className="text-custom-blue">E-nsure</Link>. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DefaultLayout