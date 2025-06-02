import React, { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';


const getFirstMiddleLastName = (fullName = '') => {
  const names = fullName.trim().split(' ');

  const firstName = names[0] || '-';
  const lastName = names.length > 1 ? names[names.length - 1] : '-';
  const middleName = names.length > 2 ? names.slice(1, -1).join(' ') : '';

  return { firstName, middleName, lastName };
};


const UserProfilePersonal = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axiosClient.get('/user')
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch user');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  const { firstName, lastName, middleName } = getFirstMiddleLastName(user?.name);

  return (
    <div className="tab-content mt-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">First Name</label>
              <div className="text-sm p-2 bg-gray-50 rounded">{firstName} {middleName}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Last Name</label>
              <div className="text-sm p-2 bg-gray-50 rounded">{lastName}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Date of Birth</label>
              <div className="text-sm p-2 bg-gray-50 rounded">{user?.dob || '-'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePersonal;