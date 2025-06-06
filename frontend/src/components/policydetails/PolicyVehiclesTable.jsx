import React from 'react'

const PolicyVehiclesTable = () => (
  
  <div className="w-full flex flex-col gap-2.5 overflow-x-auto">
    <div className="w-full flex flex-col gap-2.5">
      <div className="w-full bg-white flex flex-col md:flex-row gap-2">
        {/* Example Table Columns */}
        <div className="flex-1 flex flex-col">
          <div className="h-11 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">Plate No</div>
          </div>
          <div className="h-16 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-blue-900 text-sm font-normal font-['Open_Sans'] underline">RAE516T</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-11 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">Brand</div>
          </div>
          <div className="h-16 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-blue-900 text-sm font-normal font-['Open_Sans'] underline">TOYOTA</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-11 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">Manufactured year</div>
          </div>
          <div className="h-16 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-blue-900 text-sm font-normal font-['Open_Sans'] underline">RAE516T</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-11 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">Chassis Number</div>
          </div>
          <div className="h-16 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-blue-900 text-sm font-normal font-['Open_Sans'] underline">RAE516T</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-11 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">Seat Number</div>
          </div>
          <div className="h-16 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-blue-900 text-sm font-normal font-['Open_Sans'] underline">5</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-11 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-stone-900 text-base font-semibold font-['Open_Sans']">Usage</div>
          </div>
          <div className="h-16 px-6 py-3 bg-white border-b border-neutral-200 flex items-center">
            <div className="flex-1 text-blue-900 text-sm font-normal font-['Open_Sans'] underline">Private</div>
          </div>
        </div>
        {/* Add more columns as needed */}
      </div>
    </div>
  </div>
)

export default PolicyVehiclesTable