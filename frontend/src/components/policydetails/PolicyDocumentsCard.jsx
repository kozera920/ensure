import React from 'react'
import pdf_icon from '../../assets/images/policydetails/pdf_icon.png';
import visibility from '../../assets/images/policydetails/visibility.png';
import download from '../../assets/images/policydetails/download.png';

const PolicyDocumentsCard = () => (

  <div className="w-full flex-1 pl-5 pr-4 py-4 bg-white rounded-lg shadow flex flex-col gap-4 overflow-hidden">
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center gap-2.5">
        <div className="text-black text-base font-semibold font-['Open_Sans']">My Documents</div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full border-b border-gray-800/10 flex items-center gap-2">
          <div className="p-2.5 bg-blue-900 rounded-tl-lg rounded-tr-lg flex items-center gap-2.5">
            <div className="text-white text-base font-semibold font-['Open_Sans']">Sent</div>
          </div>
          <div className="p-2.5 opacity-80 rounded-tl-[10px] rounded-tr-[10px] border-b flex items-center gap-2.5">
            <div className="text-zinc-500 text-base font-normal font-['Open_Sans']">Received</div>
          </div>
        </div>
        {/* Example Document Row */}
        <div className="w-full py-2 bg-white border-b border-neutral-200 flex items-center gap-3">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 relative overflow-hidden">
                <img src={pdf_icon} />  
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-neutral-700 text-sm font-normal font-['Open_Sans']">My Document</div>
              </div>
            </div>
            <div className="p-1 rounded-[30px] flex items-center gap-2">
              <img src={visibility} />              
              <img src={download} /> 
            </div>
          </div>
        </div>
        <div className="w-full py-2 bg-white border-b border-neutral-200 flex items-center gap-3">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 relative overflow-hidden">
                <img src={pdf_icon} />  
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-neutral-700 text-sm font-normal font-['Open_Sans']">My Document</div>
              </div>
            </div>
            <div className="p-1 rounded-[30px] flex items-center gap-2">
              <img src={visibility} />              
              <img src={download} /> 
            </div>
          </div>
        </div>
        {/* Add more document rows as needed */}
      </div>
    </div>
  </div>
)

export default PolicyDocumentsCard