import React from 'react'

const PolicyInfoCard = () => (
    
  <div className="w-full md:w-80 pl-5 pr-4 py-4 bg-white rounded-lg shadow flex flex-col justify-center items-start gap-5 overflow-hidden">
    <div className="w-full flex justify-center items-center">
      <div className="flex-1 flex flex-col gap-2.5">
        <div className="text-black text-base font-semibold font-['Open_Sans']">Policy No</div>
        <div className="w-full flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2">
            <div className="p-2.5 bg-blue-100 rounded-full flex items-center gap-2.5">
              <div className="w-5 h-5 relative overflow-hidden">
                <div className="w-3.5 h-3.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-[1.25px] outline-offset-[-0.62px] outline-stone-900" />
              </div>
            </div>
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">RD112AUTO2226350</div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center items-center">
      <div className="flex-1 flex flex-col gap-2.5">
        <div className="w-full flex justify-between items-center">
          <div className="text-black text-base font-semibold font-['Open_Sans']">Premium</div>
          <div className="w-24 flex flex-col gap-2.5">
            <div className="rounded-[20px] flex items-center">
              <div className="text-blue-900 text-sm font-bold font-['Open_Sans']">View Details</div>
              <div className="w-4 h-4 relative">
                <div className="w-1 h-1.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="p-2.5 bg-blue-100 rounded-full flex items-center gap-2.5">
              <div className="w-7 h-7 relative bg-blue-100 rounded-full overflow-hidden">
                <div className="w-6 h-6 absolute left-[3px] top-[4px] bg-zinc-300" />
                <div className="w-4 h-5 absolute left-[7px] top-[5.65px] bg-black" />
              </div>
            </div>
            <div className="text-black text-base font-semibold font-['Open_Sans']">1,400,000 Rwf </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PolicyInfoCard