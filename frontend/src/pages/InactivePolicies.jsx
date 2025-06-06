import React from 'react'

import InactivePolicyListings from '../components/Policies/InactivePolicyListing.jsx';
import BuyNewPolicy from '../components/Policies/BuyNewPolicy.jsx'


const InactivePolicies = () => {
  
  return (
    <>
        <div>          
          
          <BuyNewPolicy/>
          
          <div className='bg-white p-5'>
            <h3 className="text-xl font-semibold mb-4">Inactive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* ...policy card... */}
              
              <InactivePolicyListings/>            
              
            </div>
          </div>
        </div>
    </>
  )
}

export default InactivePolicies