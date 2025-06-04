import React from 'react'
import logo from '../../assets/images/logo.png';
import NavBar from '../Layouts/NavBar.jsx';

const Aside = () => {
  return (
    <>
        <aside className="bg-diagonal w-64 text-white flex flex-col">
            <div className="flex items-center justify-center h-20 bg-diagonal">
              <img src={logo} alt="E-nsure Logo" className="h-12 w-auto" />
            </div>
            <NavBar/>
        </aside>    
    </>
  )
}

export default Aside