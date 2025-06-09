import React, { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';

const UserProfileResidence = () => {
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

  return (
    <div className="tab-content mt-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
           <div className="justify-center text-zinc-800 text-4xl font-bold font-['Open_Sans']">Residence Information</div>
          <div className="w-24 h-24 max-w-[658.60px] relative bg-zinc-500 rounded-[44.50px] overflow-hidden">
            <div className="left-[20.77px] top-[27.41px] absolute justify-center text-white text-3xl font-bold font-['Open_Sans'] leading-9">MD</div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
              <div className="text-sm p-2 bg-gray-50 rounded">{user?.city || '-'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
              <div className="text-sm p-2 bg-gray-50 rounded">{user?.address || '-'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileResidence;