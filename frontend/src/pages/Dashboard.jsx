import React from 'react'

import PolicyListings from '../components/Policies/PolicyListings.jsx';



const Dashboard = () => {
  return (
    <>
        <div>          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-custom-blue">My Insurance Policies</h2>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span className="flex items-center justify-center text-lg font-semibold bg-white rounded-full text-custom-blue h-7 w-7">+</span>
              <span>Buy New Policy</span>
            </button>
          </div>
          
          <div className='bg-white p-5'>
            <h3 className="text-xl font-semibold mb-4">Active</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* ...policy card... */}
              
              <PolicyListings/>            
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard