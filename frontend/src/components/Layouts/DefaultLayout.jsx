import React, { useEffect } from 'react'
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider.jsx';
import logo from '../../assets/images/logo.png';
import usflag from '../../assets/images/usflag.png';
import axios from 'axios';
import axiosClient from '../../axios-client.js'

const DefaultLayout = () => {
  const { user, token, setUser,setToken } = useStateContext();

  if (!token) {
    return <Navigate to='/login' />
  }

  const onLogout = (event) =>{
    event.preventDefault();
    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
        localStorage.removeItem('ACCESS_TOKEN');
      })
      .catch(err => {
        console.error("Logout failed:", err);
      });
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({ data }) => {
        setUser(data);
        //setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        } else if (response && response.data && response.data.message) {
          setErrorMessage(response.data.message);
        }
      });
  }, []);

  return (
    <div id="defaultLayout" className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-blue-700 bg-white">
          <img src={logo} alt="E-nsure Logo" className="h-10" />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase">Policies</h2>
            <ul className="mt-2 space-y-1">
              <li><Link className="text-white font-medium" to="/users">Active</Link></li>
              <li><Link className="text-gray-300" to="/dashboard">Inactive</Link></li>
              <li><Link className="text-gray-300" to="#">InProgress</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase">Claims</h2>
            <ul className="mt-2 space-y-1">
              <li><Link className="text-gray-300" to="#">Policy Claims</Link></li>
              <li><Link className="text-gray-300" to="#">External Claims</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase">Billing</h2>
            <ul className="mt-2 space-y-1">
              <li><Link className="text-gray-300" to="#">Payment Method</Link></li>
              <li><Link className="text-gray-300" to="#">Compensation Method</Link></li>
              <li><Link className="text-gray-300" to="#">Payment History</Link></li>
            </ul>
          </div>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between mb-6 p-6">
          <input type="text" placeholder="Type here to search..." className="border rounded px-4 py-2 w-1/3" />
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600"><img src={usflag} alt="English" className="w-5 h-5" />English</div>
            
            <Link to="/user_profile" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold">
                MD
              </div>
              <span className="text-sm">{user?.name || ''}</span>
            </Link>
            
            <Link to ="#" className="text-sm" onClick={onLogout}>Logout</Link>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <footer className="mt-10 text-sm text-gray-500 flex justify-between p-6">
          <div className="space-x-4">
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Terms of Use</Link>
          </div>
          <div>
            &copy; 2025 <Link to="#" className="text-blue-700 hover:underline">E-nsure</Link>. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DefaultLayout