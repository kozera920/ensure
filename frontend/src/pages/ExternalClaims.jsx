import React from 'react'
import ExternalClaimsListing from '../components/claims/ExternalClaimsListing.jsx';
import SearchClaimCard from '../components/claims/SearchClaimCard.jsx';
import { Icon } from "@iconify/react";
import FileExternalClaimCard from '../components/claims/FileExternalClaimCard.jsx';


const ExternalClaims = () => {

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-custom-blue">Manage Your Claims</h1>

                <div className=' py-5'>
                    <FileExternalClaimCard/>
                </div>


                <div className='bg-white p-5'>
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold mb-4">External Claims</h3>

                        <Icon icon="solar:menu-dots-bold" width="24" height="24" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <ExternalClaimsListing />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExternalClaims