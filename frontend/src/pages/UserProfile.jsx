import React, { useState } from 'react';
import UserProfilePersonal from '../components/UserProfile/UserProfilePersonal.jsx';
import UserProfileContact from '../components/UserProfile/UserProfileContact.jsx';
import UserProfileResidence from '../components/UserProfile/UserProfileResidence.jsx';
import UserProfileCompany from '../components/UserProfile/UserProfileCompany.jsx';



const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>  
      <div className="flex-1 overflow-auto px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <nav className="-mb-px flex space-x-8 bg-white">
            <button
              type="button"
              onClick={() => setActiveTab('personal')}
              className={`
                ${activeTab === 'personal' 
                  ? 'self-stretch px-3.5 py-5 bg-custom-blue rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center' 
                  : 'self-stretch px-3.5 py-5 bg-white rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center'}`}
            >
               <div className={`
                ${activeTab==='personal' 
                  ? "self-stretch text-center justify-center text-white text-base font-normal font-['Open_Sans']"
                 :"self-stretch text-center justify-center text-zinc-500 text-base font-normal font-['Open_Sans']" }`}>Personal Information</div>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('contact')}
              className={`
                ${activeTab === 'contact' 
                  ? 'self-stretch px-3.5 py-5 bg-custom-blue rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center' 
                  : 'self-stretch px-3.5 py-5 bg-white rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center'}`}
            >
               <div className={`
                ${activeTab==='contact' 
                  ? "self-stretch text-center justify-center text-white text-base font-normal font-['Open_Sans']"
                 :"self-stretch text-center justify-center text-zinc-500 text-base font-normal font-['Open_Sans']" }`}>Contact Information</div>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('residence')}
              className={`
                ${activeTab === 'residence' 
                  ? 'self-stretch px-3.5 py-5 bg-custom-blue rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center' 
                  : 'self-stretch px-3.5 py-5 bg-white rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center'}`}
            >
               <div className={`
                ${activeTab==='residence' 
                  ? "self-stretch text-center justify-center text-white text-base font-normal font-['Open_Sans']"
                 :"self-stretch text-center justify-center text-zinc-500 text-base font-normal font-['Open_Sans']" }`}>Residence Information</div>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('company')}
              className={`
                ${activeTab === 'company' 
                  ? 'self-stretch px-3.5 py-5 bg-custom-blue rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center' 
                  : 'self-stretch px-3.5 py-5 bg-white rounded-tl-lg rounded-bl-2xl inline-flex flex-col justify-start items-center'}`}
            >
               <div className={`
                ${activeTab==='company' 
                  ? "self-stretch text-center justify-center text-white text-base font-normal font-['Open_Sans']"
                 :"self-stretch text-center justify-center text-zinc-500 text-base font-normal font-['Open_Sans']" }`}>Company Information</div>
            </button>
          </nav>  

          <div className="tab-content mt-6">
            {activeTab === 'personal' && <UserProfilePersonal />}
            {activeTab === 'contact' && <UserProfileContact />}
            {activeTab === 'residence' && <UserProfileResidence />}
            {activeTab === 'company' && <UserProfileCompany />}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;