import React from 'react'
import logo from '../../assets/images/logo.png';
import NavBar from '../Layouts/NavBar.jsx';
import { Icon } from "@iconify/react";
const Aside = ({showNavBar, setShowNavBar}) => {
  return (
    <>
      <aside
        className={`bg-diagonal w-64 text-white flex-col hidden sm:flex ${
          showNavBar ? 'sm:hidden flex show-nav-bar' : ''
        } transition-all duration-300 ease-in-out`}
      >
        <div className="relative flex items-center justify-center gap-4 h-20 bg-diagonal">
          <img src={logo} alt="E-nsure Logo" className="h-12 w-auto mx-auto" />
          <button
            onClick={() => setShowNavBar(false)}
            className="absolute right-4 text-custom-blue cursor-pointer sm:hidden"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <Icon icon="material-symbols:close" width="34" height="34" />
          </button>
        </div>
        <NavBar />
      </aside>
    </>
  )
}

export default Aside