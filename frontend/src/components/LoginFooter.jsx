import React from 'react';
import { data, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const LoginFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-auto pt-10 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>
            {t('login.difficulties')}&nbsp;&nbsp;
            <Link to="#" className="text-[#204C86] cursor-pointer">{t('login.contactEnsure')}</Link>
          </p>
          <LanguageSwitcher/>
    </div>
  )
}

export default LoginFooter