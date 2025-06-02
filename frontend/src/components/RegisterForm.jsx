import React, { useState, useRef } from 'react'
import { data, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import usflag from '../assets/images/usflag.png';
import axiosClient from '../axios-client.js'
import { useStateContext } from '../contexts/ContextProvider'
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {

   const { t } = useTranslation();

   const [tab, setTab] = useState('individual');
   const [errors, setErrors] = useState(null);

  // Refs for form inputs
  const nameRef = useRef();
  const phoneNumberRef = useRef();
  const nidaRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const termsRef = useRef();
  
  const companyNameRef = useRef();
  const tinRef = useRef();
  const phoneRef = useRef();
  const companyEmailRef = useRef();
  const companyPasswordRef = useRef();
  const companyPasswordConfirmationRef = useRef();
  const companyTermsRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(null);

    let payload = {
      user_type: tab,
      terms: tab === 'individual' ? termsRef.current.checked : companyTermsRef.current.checked
    };

    if (tab === 'individual') {
      payload = {
        ...payload,
        name: nameRef.current.value,
        phone: phoneNumberRef.current.value,  
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
      };
      if (documentType === 'NIDA') {
        payload.nida = nidaRef.current.value;
      } else {
        payload.passport = nidaRef.current.value;
      }
    } else {
      payload = {
        ...payload,
        company_name: companyNameRef.current.value,
        tin: tinRef.current.value,
        phone: phoneRef.current.value,
        email: companyEmailRef.current.value,
        password: companyPasswordRef.current.value,
        password_confirmation: companyPasswordConfirmationRef.current.value,
      };
    }


    axiosClient.post('/register', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  const [documentType, setDocumentType] = useState('NIDA');

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
      <div className="flex justify-between items-center mb-10">
        <img src={logo} alt="E-nsure Logo" className="h-10" />
        <button className="border px-4 py-1 rounded-md text-sm flex items-center gap-1">
          {/* ...icon... */}
          {t('login.agent')}
        </button>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('register.createTitle')}</h2>
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setTab('individual')}
          className={`py-2 px-4 rounded-md ${tab === 'individual' ? 'bg-blue-900 text-white' : 'text-gray-600 border'}`}
        >
          {t('register.individual')}
        </button>
        <button
          onClick={() => setTab('company')}
          className={`py-2 px-4 rounded-md ${tab === 'company' ? 'bg-blue-900 text-white' : 'text-gray-600 border'}`}
        >
          {t('register.company')}
        </button>
      </div>
      
      {errors && (
        <div className="p-4 mb-4 bg-red-100 text-red-700 rounded">
          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}

     {tab === 'individual' ? (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Document Type</label>
            <select
              value={documentType}
              onChange={e => setDocumentType(e.target.value)}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="NIDA">NID Number</option>
              <option value="Passport">Passport</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">
              {documentType === 'NIDA' ? t('register.nida') : 'Passport Number'}
            </label>
            <input
              ref={nidaRef}
              id={documentType === 'NIDA' ? 'nida' : 'passport'}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder={documentType === 'NIDA' ? t('register.nida') : 'Passport Number'}
              required
            />
            {errors?.nida && <p className="text-red-500 text-sm">{errors.nida[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.fullName')}</label>
            <input
              ref={nameRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.fullName')}
              required
            />
            {errors?.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.phone')}</label>
            <input
              ref={phoneNumberRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.phone')}
              required
            />
            {errors?.phone && <p className="text-red-500 text-sm">{errors.phone[0]}</p>}
          </div>         
          <div>
            <label className="block text-sm mb-1">{t('register.email')}</label>
            <input
              ref={emailRef}
              type="email"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.email')}
              required
            />
            {errors?.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.password')}</label>
            <input
              ref={passwordRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.password')}
              required
            />
            {errors?.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.confirmPassword')}</label>
            <input
              ref={passwordConfirmationRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.confirmPassword')}
              required
            />
          </div>
          <label className="flex items-center text-sm gap-2">
            <input
              ref={termsRef}
              type="checkbox"
              required
            />
            {t('register.agree')} <Link to="#" className="text-blue-600 underline">{t('register.privacy')}</Link> and <Link to="#" className="text-blue-600 underline">{t('register.terms')}</Link>
            {errors?.terms && <p className="text-red-500 text-sm">{errors.terms[0]}</p>}
          </label>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
            {t('register.createAccount')}
          </button>
        </form>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">{t('register.companyName')}</label>
            <input
              ref={companyNameRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.companyName')}
              required
            />
            {errors?.company_name && <p className="text-red-500 text-sm">{errors.company_name[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.tin')}</label>
            <input
              ref={tinRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.tin')}
              required
            />
            {errors?.tin && <p className="text-red-500 text-sm">{errors.tin[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.phone')}</label>
            <input
              ref={phoneRef}
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.phone')}
              required
            />
            {errors?.phone && <p className="text-red-500 text-sm">{errors.phone[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.email')}</label>
            <input
              ref={companyEmailRef}
              type="email"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.email')}
              required
            />
            {errors?.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.password')}</label>
            <input
              ref={companyPasswordRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.password')}
              required
            />
            {errors?.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('register.confirmPassword')}</label>
            <input
              ref={companyPasswordConfirmationRef}
              type="password"
              className="w-full border rounded-md px-4 py-2"
              placeholder={t('register.confirmPassword')}
              required
            />
          </div>
          <label className="flex items-center text-sm gap-2">
            <input
              ref={companyTermsRef}
              type="checkbox"
              required
            />
            {t('register.agree')} <Link to="#" className="text-blue-600 underline">{t('register.privacy')}</Link> and <Link to="#" className="text-blue-600 underline">{t('register.terms')}</Link>
            {errors?.terms && <p className="text-red-500 text-sm">{errors.terms[0]}</p>}
          </label>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800">
            {t('register.createAccount')}
          </button>
        </form>
      )}

      <p className="text-sm mt-4">
        {t('register.alreadyHaveAccount')}{' '}
        <Link to="/login" className="text-blue-600 hover:underline">{t('register.loginHere')}</Link>
      </p>
      <div className="w-full flex justify-end mt-4 md:mt-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className="flex items-center gap-1 text-sm px-2 py-1 border rounded hover:bg-gray-100"
          >
            <img src={usflag} alt="English" className="w-4 h-4" />
            English
          </button>
          <button
            onClick={() => i18n.changeLanguage('rw')}
            className="flex items-center gap-1 text-sm px-2 py-1 border rounded hover:bg-gray-100"
          >
            🇷🇼 Kinyarwanda
          </button>
        </div>
      </div>
    </div>
  );
};


export default RegisterForm