import React from "react";

const VehicleTableHeader = () => {
  return (
    <>
      <div className="bg-gray-50 grid grid-cols-7">
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-xs font-bold text-center">
          Year of manufacture
        </div>
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-black text-xs font-bold text-center">
          Make
        </div>
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-black text-xs font-bold text-center">
          Model
        </div>
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-black text-xs font-bold text-center">
          Seats No
        </div>
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-black text-xs font-bold text-center">
          Category
        </div>
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-black text-xs font-bold text-center">
          Plate No
        </div>
        <div className="pb-2 pt-2 bg-slate-100 font-opensans text-black text-xs font-bold text-center">
          Actions
        </div>
      </div>
    </>
  );
};

export default VehicleTableHeader;
