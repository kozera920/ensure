import React, { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';
import Initials from './Initials.jsx';

const UserProfileCompany = () => {
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
           <div className="justify-center text-zinc-800 text-4xl font-bold font-['Open_Sans']">Company Information</div>
          <Initials user={user}/>          

          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Company Name:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.company} {user?.middlename}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Work Phone:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user.phone}</div>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCompany;