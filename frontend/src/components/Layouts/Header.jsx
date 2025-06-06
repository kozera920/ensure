import React, { useState, useEffect } from 'react'
import usflag from '../../assets/images/usflag.png'
import rwflag1 from '../../assets/images/rwflag1.png'
import { Link, Navigate } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider.jsx'
import axiosClient from '../../axios-client.js'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Header = () => {
  const { user, token, setUser, setToken } = useStateContext()
  const [language, setLanguage] = useState('en')

  const onLogout = (event) => {
    event.preventDefault()
    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
        localStorage.removeItem('ACCESS_TOKEN')
      })
      .catch(err => {
        console.error("Logout failed:", err)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({ data }) => {
        setUser(data)
      })
      .catch(err => {
        // handle error
        console.error(":", err)
      })
  }, [])

  if (!token) {
    return <Navigate to='/login' />
  }

  function getInitials(name) {
    
    if (!name) return '';

    const parts = name.trim().split(' ');

    if (parts.length === 1) return parts[0][0].toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

  // Choose flag based on language
  const flag = language === 'en' ? usflag : rwflag1

  return (
    <header className="p-5">
      <div className="bg-white shadow rounded-md flex items-center p-5">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Type here to search..."
            className="bg-gray-100 border border-gray-300 rounded-full pl-4 pr-10 py-1 text-sm w-full placeholder-12px focus:outline-none"
            style={{ fontSize: '14px' }}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-700 p-1"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-8 ml-auto">
            <div className="flex items-center gap-1">
                <img src={flag} alt="Flag" className="w-5 h-5" />
                <select
                className="bg-transparent text-sm outline-none cursor-pointer pl-1 pr-2"
                value={language}
                onChange={e => setLanguage(e.target.value)}
                style={{ paddingLeft: 4, paddingRight: 8 }}
                >
                <option value="en">English</option>
                <option value="rw">Kinyarwanda</option>
                </select>
            </div>
            <div className="relative">
                <IoMdNotificationsOutline className="h-6 w-6 text-gray-500 cursor-pointer" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </div>
            <Link to="/user_profile" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center font-semibold">
                    {getInitials(user?.name)}
                </div>
                <div className="flex flex-col">
                    <span className="text-sm">{user?.name || ''}</span>
                    <span className="text-xs text-blue-700">{user?.user_type || ''}</span>
                </div>
            </Link>
            <Link to ="#" className="text-sm" onClick={onLogout}>Logout</Link>
        </div>
      </div>
    </header>
  )
}

export default Header