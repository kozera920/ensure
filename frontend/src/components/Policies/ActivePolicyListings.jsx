import React from 'react'
import { Link } from 'react-router-dom'
import policies from '../../policies.json'
import visibility from '../../assets/images/policydetails/visibility.png'
import radiant_elipse from '../../assets/images/policydetails/radiant_elipse.png'
import car_icon from '../../assets/images/policydetails/car_icon.png'
import hashtag from '../../assets/images/policydetails/hashtag.png'
import { Icon } from "@iconify/react";

const ActivePolicyListings = () => {
    
  return (
    <>
        {policies.slice(0, 3).map((policy)=>{
            return(
                <div key={policy.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col gap-2" >
                    <div className="flex items-center gap-2 mb-2">
                        <img src={radiant_elipse} className="h-8 w-8 text-gray-500 bg-indigo-100 rounded-full" />
                        <h4 className="font-semibold text-gray-800">{policy.insuranceCompanyName}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={car_icon} className="h-8 w-8 text-gray-500 bg-indigo-100 rounded-full" />
                        <span>{policy.carBrand} - {policy.plateNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={hashtag} className="h-8 w-8 text-gray-500 bg-indigo-100 rounded-full" />
                        <span>Policy #: {policy.policyNumber}</span>
                    </div>
                    
                    <div className="flex items-center gap-13 mt-2">
                        <Link
                            to={`/policy/${policy.id}`}
                            className="px-3.5 py-[5px] rounded-[50px] outline outline-2 text-custom-blue inline-flex justify-center items-center gap-2"
                        >
                            <img src={visibility} alt="View" />
                            <div className="justify-start text-custom-blue text-sm font-normal font-['Open_Sans']">View Policy</div>
                        </Link>                        
                    </div>                   
                </div>
            )
        })}
    </>    
  )
}

export default ActivePolicyListings