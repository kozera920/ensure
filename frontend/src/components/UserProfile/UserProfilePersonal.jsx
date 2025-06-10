import React, { useState, useEffect } from 'react';
import axiosClient from '../../axios-client.js';
import Initials from './Initials.jsx';


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
          <div className="justify-center text-zinc-800 text-4xl font-bold font-['Open_Sans']">Personal Information</div>
          <Initials user={user}/>         
          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">First Name:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{firstName} {middleName}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Last Name:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{lastName}</div>
                </div>
              </div>
            </div>          
          </div>
          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Date of Birth:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user.dob}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Birth Place:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user.address}</div>
                </div>
              </div>
            </div>          
          </div>
          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Nationality:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user.dob}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Driving Licence:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user.address}</div>
                </div>
              </div>
            </div>          
          </div>
          <div className="grid grid-cols-2 gap-6">            
            <div className="w-full max-w-[555px] px-3.5 inline-flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-stone-900 text-sm font-normal font-['Open_Sans']">Marital Status:</div>
              <div className="self-stretch h-11 px-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-center text-zinc-500 text-sm font-normal font-['Open_Sans']">{user.marital_status}</div>
                </div>
              </div>
            </div>                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePersonal;