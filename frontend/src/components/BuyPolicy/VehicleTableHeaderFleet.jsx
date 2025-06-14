import React from 'react'

const VehicleTableHeaderFleet = () => {
  return (
    <div className="w-full bg-gray-50 grid grid-cols-9">
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Usage</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Chassis Number</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Year</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Make</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Model</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Seats No</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Category</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Plate No</div>
      <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">Actions</div>
    </div>
  )
}

export default VehicleTableHeaderFleet