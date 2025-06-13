import React from "react";
import { Icon } from "@iconify/react";
import VehicleTableHeader from "./VehicleTableHeader.jsx";

const VehicleTable = ({
  vehicleCount,
  cars,
  searchChassis,
  chassisNumber,
  setShowDeleteAlert,
  setShowEditModal,
  handleExcelFileUpload,
  fleetFileName,
  setFleetFileName,
  setCarToEdit,
}) => {  

    const onFleetFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        setFleetFileName(e.target.files[0].name);
        handleExcelFileUpload(e);
    }
    };

  return (
    <>
      {vehicleCount === "one" && (
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px] md:min-w-0">
            <VehicleTableHeader />
            {searchChassis ? (
              cars
                .filter(
                  (car) =>
                    car.chassis_no &&
                    car.chassis_no
                      .toLowerCase()
                      .includes(searchChassis.toLowerCase())
                )
                .map((car, idx) => (
                  <div
                    className="grid grid-cols-7"
                    key={car.chassis_no || car.plate_no || `car-row-${idx}`}
                  >
                    <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                      {car.year_of_manufacture || "2024"}
                    </div>
                    <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                      {car.make}
                    </div>
                    <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                      {car.model || "-"}
                    </div>
                    <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                      {car.seats_no || "4"}
                    </div>
                    <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                      {car.category || "Jeep / SUX-Private"}
                    </div>
                    <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                      {car.plate_no || "RAF 564"}
                    </div>
                    <div className="pb-1 pt-1 border-b border-slate-200 flex justify-center">
                      <button
                        type="button"
                        className="text-red-500 cursor-pointer mt-0 pt-0"
                        onClick={() => setShowDeleteAlert(true)}
                      >
                        <Icon icon="ep:delete" width="14" height="14" />
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <div className="col-span-7 text-center text-black py-4">
                {chassisNumber ? (
                  <div className="text-xs font-opensans">
                    Click the search button to find the car.
                  </div>
                ) : (
                  <div className="text-xs font-opensans">
                    Please enter a chassis number and click search.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {vehicleCount === "fleet" && (
        <div className="w-full overflow-x-auto">
          <div className="flex justify-start w-full mb-2">
            <div className="px-3 py-1.5 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-gray-300 flex items-center gap-3 overflow-hidden">
              <span className="text-gray-500 text-sm font-normal font-opensans leading-tight">
                Import Fleet Data (Excel/CSV)
              </span>
              <label className="px-2 py-1 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-gray-500 flex items-center gap-2.5 cursor-pointer">
                <input
                type="file"
                accept=".xlsx, .xls"
                onChange={onFleetFileChange}
                className="hidden"
                />
                <span className="text-gray-500 text-sm font-normal font-opensans leading-tight">
                  Browse
                </span>                 
              </label>
                {fleetFileName ? (
                <span className="text-gray-500 text-sm font-normal font-opensans leading-tight">
                    {fleetFileName}
                </span>
                ) : (
                <span className="text-gray-400 text-sm font-normal font-opensans leading-tight">
                    No file selected
                </span>
                )}
            </div>
          </div>
          <div className="min-w-[600px] md:min-w-0">
            <VehicleTableHeader />
            {(!fleetFileName || cars.length === 0) ? (
              <div className="col-span-7 text-center text-black py-4 text-sm">Upload Excel Sheet</div>
            ) : (
              cars.map((car, idx) => (
                <div
                  className="grid grid-cols-7"
                  key={
                    car.chassis_no ||
                    car["Chassis No"] ||
                    car.plate_no ||
                    `car-row-${idx}`
                  }
                >
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.year_of_manufacture || car["Year of Manufacture"] || "-"}
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.make || car["Make"] || "-"}
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.model || car["Model"] || "-"}
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.seats_no || car["Seats No"] || "-"}
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.category || car["Category"] || "-"}
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.plate_no || car["Plate No"] || "-"}
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 flex justify-center items-center gap-0">
                    <button
                      type="button"
                      className="text-gray-500 cursor-pointer p-0 m-0 flex items-center justify-center"
                      title="Edit"
                      onClick={() => {
                        setShowEditModal(true);
                        setCarToEdit({ ...car }); 
                      }}
                    >
                      <Icon icon="bx:edit" width="16" height="16" />
                    </button>
                    <span className="h-6 w-px bg-slate-200 mx-2"></span>
                    <button
                      type="button"
                      className="text-red-500 cursor-pointer p-0 m-0 flex items-center justify-center"
                      title="Delete"
                      onClick={() => setShowDeleteAlert(true)}
                    >
                      <Icon icon="ep:delete" width="14" height="14" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <button
            type="button"
            onClick={() => alert("Add a new vehicle")}
            className="px-8 py-1 bg-blue-400 rounded-[50px] text-white text-base text-sm font-semibold w-full md:w-auto mt-4 md:mt-0 md:ml-auto cursor-pointer flex items-center justify-center"
            style={{ marginTop: "1rem" }}
          >
            <span className="flex items-center gap-2">
              <Icon icon="ei:plus" width="20" height="20" />
              Add a new vehicle
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default VehicleTable;
