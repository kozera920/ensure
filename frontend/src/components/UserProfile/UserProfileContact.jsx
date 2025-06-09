import React, { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';

const UserProfileContact = () => {
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
          <div className="justify-center text-zinc-800 text-4xl font-bold font-['Open_Sans']">Contact Information</div>
          <div className="w-24 h-24 max-w-[658.60px] relative bg-zinc-500 rounded-[44.50px] overflow-hidden">
            <div className="left-[20.77px] top-[27.41px] absolute justify-center text-white text-3xl font-bold font-['Open_Sans'] leading-9">MD</div>
          </div>          
          <div className="grid grid-cols-3 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Phone Number:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.phone || '-'}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Email:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.email || '-'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Address:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.address || '-'}</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContact;