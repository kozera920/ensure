import React from 'react'
import InprogressPolicyListings from '../components/Policies/InprogressPolicyListings.jsx'
import ButtonBuyNewPolicy from '../components/Policies/ButtonBuyNewPolicy.jsx'

const InprogressPolicies = () => {
  return (
     <>
        <div>          
          
          <ButtonBuyNewPolicy/>
          
          <div className='bg-white p-5'>
            <h3 className="text-xl font-semibold mb-4">InProgress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* ...policy card... */}
              
              <InprogressPolicyListings/>            
              
            </div>
          </div>
        </div>
    </>
  )
}

export default InprogressPolicies