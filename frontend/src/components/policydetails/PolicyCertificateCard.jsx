import React from 'react'
import download1 from '../../assets/images/policydetails/download1.png';
import share from '../../assets/images/policydetails/share.png';
import Certificate from '../../assets/images/policydetails/Certificate.png';


const PolicyCertificateCard = () => (
    
  <div className="w-full flex-1 p-2.5 bg-white rounded-lg shadow flex flex-col gap-4 overflow-hidden">
    <div className="w-full flex justify-between items-center">
      <div className="text-black text-base font-semibold font-['Open_Sans']">Insurance Certificate</div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 relative overflow-hidden">
          <img src={download1}/>
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <img src={share}/>
        </div>
      </div>
    </div>   
    <img className="w-full h-56 shadow outline outline-1 outline-offset-[-1px] outline-blue-700" src={Certificate} alt="Certificate" />
  </div>
)

export default PolicyCertificateCard