import React from 'react';
import logo from '../assets/images/logo.png';
import iconAgent from '../assets/images/iconAgent.png';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';


const LoginHeader = () => {
    const { t } = useTranslation();
  return (
    <>
        <div className="flex justify-end mb-10">
            <button className="border px-4 py-1 rounded-lg text-sm flex items-center gap-1 text-[#204C86] cursor-pointer">
            <span className="inline-flex items-center p-2 rounded">
                <img src={iconAgent} alt="icon agent" className="w-4 h-4" />
            </span>
            {t('login.agent')}
            </button>
        </div>
        <div className="flex justify-center mb-10">
            <img src={logo} alt="E-nsure Logo" className="h-15 w-auto" />
        </div>
    </>    
  )
}

export default LoginHeader