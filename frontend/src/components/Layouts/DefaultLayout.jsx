import React,{ useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Aside from '../Layouts/Aside.jsx';
import Header from '../Layouts/Header.jsx';
import WelcomeMessage from '../topbanners/WelcomeMessage.jsx';
import Footer from '../../components/Layouts/Footer.jsx'


const DefaultLayout = () => {
 
  const [showWelcome, setShowWelcome] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem('isNewUser') === 'true') {
      setShowWelcome(true);
      localStorage.removeItem('isNewUser');
    }
  }, []);

  return (
    <div id="defaultLayout" className="flex min-h-screen">
      {/* Sidebar */}
      <Aside showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-custom-dashboard">
        <Header showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
        <main className="flex-1 p-6">
          {showWelcome && <WelcomeMessage />}        
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default DefaultLayout