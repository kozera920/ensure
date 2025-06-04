import React from 'react'
import { BuildingOffice2Icon, HashtagIcon } from '@heroicons/react/24/outline'
import { FaCar } from 'react-icons/fa'
import policies from '../../policies.json'

const PolicyListings = () => {
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
                    
                    <button className="w-40 flex items-center justify-center gap-2 border bg-white text-sm text-custom-blue p-2 rounded-full cursor-pointer font-opensans">
                        {/* Eye icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                            View Policy
                    </button>
                </div>
            )
        })}
    </>
    
  )
}

export default PolicyListings