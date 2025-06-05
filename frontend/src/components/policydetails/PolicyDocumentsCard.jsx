import React from 'react'

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
                <div className="w-4 h-6 absolute left-[7.49px] top-[1.75px] bg-neutral-400" />
                <div className="w-4 h-6 absolute left-[7.43px] top-[1.69px] bg-zinc-100" />
                <div className="w-4 h-1.5 absolute left-[1.91px] top-[2.95px] bg-zinc-500" />
                <div className="w-4 h-1.5 absolute left-[2.02px] top-[2.85px] bg-red-600" />
                <div className="w-2 h-1 absolute left-[6.54px] top-[3.81px] bg-zinc-700" />
                <div className="w-2.5 h-2.5 absolute left-[10.89px] top-[10.36px] bg-red-600" />
                <div className="w-[4.75px] h-[4.96px] absolute left-[20.21px] top-[1.75px] bg-neutral-400" />
                <div className="w-[4.75px] h-[4.96px] absolute left-[20.28px] top-[1.69px] bg-zinc-100" />
                <div className="w-2 h-1 absolute left-[6.47px] top-[3.75px] bg-white" />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-neutral-700 text-sm font-normal font-['Open_Sans']">My Document</div>
              </div>
            </div>
            <div className="p-1 rounded-[30px] flex items-center gap-2">
              <div className="w-4 h-4 bg-zinc-300" />
              <div className="w-3.5 h-2.5 bg-blue-900" />
              <div className="w-4 h-4 bg-zinc-300" />
              <div className="w-2.5 h-2.5 bg-blue-900" />
            </div>
          </div>
        </div>
        {/* Add more document rows as needed */}
      </div>
    </div>
  </div>
)

export default PolicyDocumentsCard