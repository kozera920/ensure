import React, { useState } from 'react';
import UserProfilePersonal from '../components/UserProfile/UserProfilePersonal.jsx';
import UserProfileContact from '../components/UserProfile/UserProfileContact.jsx';
import UserProfileResidence from '../components/UserProfile/UserProfileResidence.jsx';
import UserProfileCompany from '../components/UserProfile/UserProfileCompany.jsx';

const tabTitles = {
  personal: 'Personal Information',
  contact: 'Contact Information',
  residence: 'Residence Information',
  company: 'Company Information',
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      <div className="border-b border-gray-200 px-8 pt-6">
        <h2 className="text-lg font-semibold mb-4">{tabTitles[activeTab]}</h2>
      </div>

      <div className="flex-1 overflow-auto px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <nav className="-mb-px flex space-x-8">
            <button
              type="button"
              onClick={() => setActiveTab('personal')}
              className={`py-2 px-4 border-b-2 ${activeTab === 'personal' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} font-medium`}
            >
              Personal Information
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('contact')}
              className={`py-2 px-4 border-b-2 ${activeTab === 'contact' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} font-medium`}
            >
              Contact Information
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('residence')}
              className={`py-2 px-4 border-b-2 ${activeTab === 'residence' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} font-medium`}
            >
              Residence Information
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('company')}
              className={`py-2 px-4 border-b-2 ${activeTab === 'company' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} font-medium`}
            >
              Company Information
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