import React from 'react'

const PolicyContactCard = () => (
  <div className="w-full px-4 py-6 bg-white rounded-2xl flex flex-col md:flex-row items-center gap-3.5 overflow-x-auto">
    <div className="flex-1 flex justify-between items-center">
      <div className="h-8 flex items-center gap-24">
        <div className="py-1.5 flex items-center gap-2.5">
          <div className="text-black text-lg font-semibold font-['Open_Sans']">Contact Insurer</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img className="w-9 h-9 rounded-full border border-sky-500" src="https://placehold.co/38x38" alt="Insurer" />
        <div className="flex items-center gap-2.5">
          <div className="text-black text-base font-normal font-['Open_Sans']">Radiant Insurance Company</div>
        </div>
      </div>
      <div className="py-1 flex items-center gap-2.5">
        <div className="w-6 h-6 relative">
          <div className="w-4 h-4 absolute left-[4.17px] top-[3.30px] bg-black" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="text-zinc-700 text-base font-normal font-['Open_Sans']">078..........</div>
        </div>
      </div>
      <div className="w-60 px-9 py-1 flex flex-col items-start gap-2.5">
        <div className="w-full flex items-center gap-2.5">
          <div className="text-zinc-700 text-base font-normal font-['Open_Sans']">CHIC Building, KN 2 Ave</div>
        </div>
      </div>
    </div>
  </div>
)

export default PolicyContactCard