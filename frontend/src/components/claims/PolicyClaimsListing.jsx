import React from 'react'
import { Link } from 'react-router-dom'
import claims from '../../claims.json'
import visibility from '../../assets/images/policydetails/visibility.png'
import radiant_elipse from '../../assets/images/policydetails/radiant_elipse.png'
import car_icon from '../../assets/images/policydetails/car_icon.png'
import hashtag from '../../assets/images/policydetails/hashtag.png'
import { Icon } from '@iconify/react/dist/iconify.js'

const PolicyClaimsListing = () => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <>
            {claims.slice(0, 3).map((claim) => {
                return (
                    <div key={claim.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col gap-2" >
                        <div className="flex items-center gap-2 mb-2">
                            <img src={radiant_elipse} className="h-8 w-8 text-gray-500 bg-indigo-100 rounded-full" />
                            <h4 className="font-semibold text-gray-800">{claim.insuranceCompanyName}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={car_icon} className="h-8 w-8 text-gray-500 bg-indigo-100 rounded-full" />
                            <span>{claim.carBrand} - {claim.plateNumber}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div src={hashtag} className="h-8 w-8 text-gray-500 bg-[#D7ECFE] rounded-full p-[6px]"><Icon icon="ep:calendar" width="20" height="20" /></div>
                            <span>Due on {formatDate(claim.dueDate)}</span>
                        </div>

                        <div className="flex items-center gap-4 mt-2">
                            <Link
                                to={`/claims/${claim.id}`}
                                className="px-5 py-[5px] rounded-[50px] outline outline-2 text-custom-blue inline-flex justify-center items-center gap-2"
                            >
                                <img src={visibility} alt="View" />
                                <div className="justify-start text-custom-blue text-sm font-normal font-['Open_Sans']">My Claims</div>
                            </Link>

                            <Link
                                to={`/claims/file_a_claim/${claim.id}`}
                                className="px-5 py-[5px] rounded-[50px] outline outline-2 text-white bg-custom-blue inline-flex justify-center items-center gap-2"
                            >
                                <Icon icon="mynaui:plus" width="24" height="24" />
                                <div className="justify-start text-sm font-normal font-['Open_Sans']">File a Claim</div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default PolicyClaimsListing