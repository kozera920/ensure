import React from 'react'

import ActivePolicyListings from '../components/Policies/ActivePolicyListings.jsx';
import ButtonBuyNewPolicy from '../components/Policies/ButtonBuyNewPolicy.jsx';



const Dashboard = () => {
  
  return (
    <>
        <div>          
          <ButtonBuyNewPolicy/>
          
          <div className='bg-white p-5'>
            <h3 className="text-xl font-semibold mb-4">Active</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* ...policy card... */}
              
              <ActivePolicyListings/>            
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard