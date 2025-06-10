import React, { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';
import Initials from './Initials.jsx';

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
          <Initials user={user}/>

          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Province:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.province||'-'}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">District:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.district||'-'}</div>
                </div>
              </div>
            </div>          
          </div>

          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Sector:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.sector||'-'}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Cell:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.cell||'-'}</div>
                </div>
              </div>
            </div>          
          </div>
          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Village:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.village||'-'}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Occupation:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user?.occupation||'-'}</div>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileResidence;