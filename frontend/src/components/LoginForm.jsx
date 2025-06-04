import React, { useState, useRef } from 'react'
import { data, Link } from 'react-router-dom'
import axiosClient from '../axios-client.js'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginHeader from '../components/LoginHeader.jsx';
import LoginFooter from '../components/LoginFooter.jsx';



const LoginForm = () => {

  const { t } = useTranslation();
 

  const { setUser, setToken } = useStateContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    setErrorMessage('');

    const payload = {
      login: emailRef.current.value,
      password: passwordRef.current.value
    };

    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate('/dashboard');
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        } else if (response && response.data && response.data.message) {
          setErrorMessage(response.data.message);
        }
      });
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">      
        <LoginHeader/>        
        <div className='max-w-md w-full mx-auto'>
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-6 font-opensans">
            {t('login.login')}
          </h2>
          {errors && Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
          {(errors || errorMessage) && (
            <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
              {errors && Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          )}
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block text-sm mb-1">{t('Email or Phone') || 'Email or Phone'}</label>
            <input
              ref={emailRef}
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-14px" placeholder={t('Email or Phone') || 'Email or Phone'}
            />
            <div>
              <label className="block text-sm mb-1">{t('login.password')}</label>
              <div className="relative">
                <input ref={passwordRef} type="password" className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-14px" placeholder={t('login.password')} />
                <button type="button" className="absolute right-3 top-2 text-gray-400"></button>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input              
                type="checkbox"
              />{t('login.remember')}
              </label>
              <Link to="#" className="text-[#204C86] cursor-pointer">{t('login.forgotpassword')}</Link>
            </div>
            <hr className='border-gray-300'/>
            <button type="submit" className="w-full bg-[#204C86] text-white py-2 rounded-lg hover:bg-[#54a3da] cursor-pointer">{t('login.loginB')}</button>
          </form>
          <p className="text-sm mt-4 text-gray-600">
            {t('login.account')}
            <Link to="/register" className="text-[#204C86] cursor-pointer"> &nbsp;{t('login.createAccount')}</Link>
          </p>          
        </div>
        <LoginFooter/>        
   </div>
  )
}

export default LoginForm