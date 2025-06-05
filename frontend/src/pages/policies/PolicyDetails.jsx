import React from 'react'
import PolicyBanner from '../../components/policydetails/PolicyBanner.jsx'
import PolicyActions from '../../components/policydetails/PolicyActions.jsx'
import PolicyInfoCard from '../../components/policydetails/PolicyInfoCard.jsx'
import PolicyDocumentsCard from '../../components/policydetails/PolicyDocumentsCard.jsx'
import PolicyCertificateCard from '../../components/policydetails/PolicyCertificateCard.jsx'
import PolicyVehiclesTable from '../../components/policydetails/PolicyVehiclesTable.jsx'
import PolicyContactCard from '../../components/policydetails/PolicyContactCard.jsx'

const PolicyDetails = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-slate-50 flex flex-col gap-5 p-0">
      {/* Top banner */}
      <PolicyBanner />
      {/* Middle cards */}
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="text-sky-800 text-2xl font-bold font-['Open_Sans']">Policy Details</div>
          <PolicyActions />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <PolicyInfoCard />
          <PolicyDocumentsCard />
          <PolicyCertificateCard />
        </div>
        <PolicyVehiclesTable />
        <PolicyContactCard />
      </div>
    </div>
  )
}

export default PolicyDetails