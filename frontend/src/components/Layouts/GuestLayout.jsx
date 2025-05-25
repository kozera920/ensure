import React from 'react'
import { Outlet } from 'react-router-dom';
import {useStateContext} from '../../contexts/ContextProvider.jsx';
import { Navigate } from 'react-router-dom';

const GuestLayout = () => {
  const {token} = useStateContext();
  //if user is logged in
  if(token){
    return <Navigate to = '/dashboard'/>
  }

  return (
    <>
      <Outlet />      
    </>
    
  )
}

export default GuestLayout