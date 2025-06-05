import React from 'react'

const PolicyCertificateCard = () => (
    
  <div className="w-full flex-1 p-2.5 bg-white rounded-lg shadow flex flex-col gap-4 overflow-hidden">
    <div className="w-full flex justify-between items-center">
      <div className="text-black text-base font-semibold font-['Open_Sans']">Insurance Certificate</div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="w-3.5 h-4 absolute left-[5.14px] top-[4px] outline outline-1 outline-offset-[-0.57px] outline-black" />
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="w-4 h-3.5 absolute left-[3px] top-[5px] bg-black" />
        </div>
      </div>
    </div>
    <img className="w-full h-56 rounded-lg shadow outline outline-1 outline-offset-[-1px]" src="https://placehold.co/341x228" alt="Certificate" />
  </div>
)

export default PolicyCertificateCard