import React from 'react'
import autorenew from '../../assets/images/policydetails/autorenew.png'
import design_money from '../../assets/images/policydetails/design_money.png'
const PolicyActions = () => (
    
  <div className="flex flex-wrap gap-2.5">
      <button className="text-custom-blue border px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer">
        <img src={design_money}/>
        <span>Buy New Policy</span>
      </button>
      <button className="bg-custom-blue text-white px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer">
        <img src={autorenew}/>
      <span>Renew Policy</span>
    </button>
  </div>
)

export default PolicyActions