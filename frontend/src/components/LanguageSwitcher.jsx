import React from 'react'
import i18n from '../i18n';
import usflag from '../assets/images/usflag.png';
import rwflag1 from '../assets/images/rwflag1.png';

const LanguageSwitcher = () => {
  return (
        <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button
                onClick={() => i18n.changeLanguage('en')}
                className="flex items-center gap-1 text-sm px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer"
            >
                <img src={usflag} alt="English" className="w-4 h-4" />
                English
            </button>
            <button
                onClick={() => i18n.changeLanguage('rw')}
                className="flex items-center gap-1 text-sm px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer"
            >
                <img src={rwflag1} alt="English" className="w-4 h-4" /> 
                Kinyarwanda
            </button>
        </div>
  )
}

export default LanguageSwitcher