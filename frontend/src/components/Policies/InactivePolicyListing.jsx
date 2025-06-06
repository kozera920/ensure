import React from 'react'
import { Link } from 'react-router-dom'
import { BuildingOffice2Icon, HashtagIcon } from '@heroicons/react/24/outline'
import { FaCar } from 'react-icons/fa'
import policies from '../../policies.json'
import visibility from '../../assets/images/policydetails/visibility.png'

const InactivePolicyListings = () => {
    
  return (
    <>
        {policies.slice(0, 3).map((policy)=>{
            return(
                <div key={policy.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col gap-2" >
                    <div className="flex items-center gap-2 mb-2">
                        <BuildingOffice2Icon className="h-6 w-6 text-gray-500 bg-indigo-100 rounded-full" />
                        <h4 className="font-semibold text-gray-800">{policy.insuranceCompanyName}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCar className="h-5 w-5 text-gray-500 bg-indigo-100 rounded-full" />
                        <span>{policy.carBrand} - {policy.plateNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <HashtagIcon className="h-5 w-5 text-gray-500 bg-indigo-100 rounded-full" />
                        <span>Policy #: {policy.policyNumber}</span>
                    </div>
                    
                    <Link  to={`/policy/${policy.id}`} className="w-40 flex items-center justify-center gap-2 border bg-white text-sm text-custom-blue p-2 rounded-full cursor-pointer font-opensans">
                        {/* Eye icon SVG */}
                        <img src={visibility}/>
                            View Policy
                    </Link>
                </div>
            )
        })}
    </>
    
  )
}

export default InactivePolicyListings