import React from 'react'
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import { Navigate } from 'react-router-dom';

const DefaultLayout = () => {
  
  const {user,token} = useStateContext();

  if(!token){
    return <Navigate to = '/login'/>
  }

  return (
    <Outlet />  
  )
}

export default DefaultLayout