import React from "react";
import { Icon } from "@iconify/react";
import VehicleTableHeader from "./VehicleTableHeader.jsx";
import VehicleTableHeaderFleet from "./VehicleTableHeaderFleet.jsx";
import { fetchCarFromRRA } from "../../components/utils/api.js"

// Now you can use fetchCarFromRRA(chassisNumber, usage)

const VehicleTable = ({
  vehicleCount,
  searchChassis,
  setShowDeleteAlert,
  setShowEditModal,
  handleExcelFileUpload,
  fleetFileName,
  setFleetFileName,
  setCarToEdit,
  setCarToDeleteIdx,
  setFleetCars,
  fleetCars,
  vehicleUsage,
  singleCar
}) => {

  const [rowLoading, setRowLoading] = React.useState({});

  // Fleet search handler
  const handleFleetSearch = async (idx, chassisNumber, usage) => {
    //console.log("Searching for:", chassisNumber, usage);
    //console.log("Sending to API from search:", { vin: chassisNumber, usage });
    setRowLoading((prev) => ({ ...prev, [idx]: true }));
    const found = await fetchCarFromRRA(chassisNumber, usage);
    //console.log("API result:", found);
    setFleetCars((prev) =>
      prev.map((row, i) =>
        i === idx
          ? found
            ? {
                ...row,
                ...found,
                notFound: false,
                chassis_no: row.chassis_no,
                usage: row.usage,
                make: found.vehicleMake,
                model: found.vehicleModel,
                plate_no: found.platenumber,
                year_of_manufacture: found.year,
                category: found.genre,
                seats_no: found.seatingCapacity,
              }
            : { ...row, notFound: true }
          : row
      )
    );
    setRowLoading((prev) => ({ ...prev, [idx]: false }));
  };


  // Fleet Excel upload handler
  const onFleetFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFleetFileName(e.target.files[0].name);
      handleExcelFileUpload(e, async (excelRows) => {
        // For each row, fetch car data from the API
        const mapped = await Promise.all(
          excelRows.map(async (row) => {
            const chassisNumber = row.chassis_no || row["Chassis No"] || "";
            const usage = row.usage || row["Usage"] || "";
            const found = await fetchCarFromRRA(chassisNumber, usage);
            return found
              ? { ...found, chassis_no: chassisNumber, usage }
              : { chassis_no: chassisNumber, usage, notFound: true };
          })
        );
        setFleetCars(mapped);
      });
    }
  };

  // Fleet filtering (by chassis and usage)
  const filteredFleetCars = fleetCars.filter((car) => {
    const chassisMatch = searchChassis
      ? (car.chassis_no || car["Chassis No"] || "")
          .toLowerCase()
          .includes(searchChassis.toLowerCase())
      : true;
    const usageMatch = vehicleUsage
      ? (car.usage || car["Usage"] || "")
          .toLowerCase()
          .includes(vehicleUsage.toLowerCase())
      : true;
    return chassisMatch && usageMatch;
  });

  return (
    <>
      {vehicleCount === "one" && (
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px] md:min-w-0">
            <VehicleTableHeader />
            {singleCar ? (
                <div className="grid grid-cols-7" key={singleCar.make|| singleCar.make}>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div>{singleCar.year_of_manufacture}</div>
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div>{singleCar.make}</div>
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div>{singleCar.model}</div>
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div>{singleCar.seats_no}</div>
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div>{singleCar.category}</div>
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div>{singleCar.plate_no}</div>
                  </div>
                  <div className="pb-1 pt-1 border-b border-slate-200 flex justify-center">
                      <button
                        type="button"
                        className="text-red-500 cursor-pointer mt-0 pt-0"
                        onClick={() => {
                          setCarToDeleteIdx();
                          setShowDeleteAlert(true);
                        }}
                      >
                        <Icon icon="ep:delete" width="14" height="14" />
                      </button>
                    </div>  
                </div>
              ):(
                <div className="col-span-7 text-center text-black py-4">
                  <div className="text-xs font-opensans">
                      Please enter a chassis number and click search.
                  </div>
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
          <div className="min-w-[900px] md:min-w-0">
            <VehicleTableHeaderFleet />
            {filteredFleetCars.length === 0 ? (
              <div className="col-span-7 text-center text-black py-4 text-sm">
                Upload Excel Sheet
              </div>
            ) : (
              filteredFleetCars.map((car, idx) => (
                <div className="grid grid-cols-9" key={`car-row-${idx}`}>
                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <select
                      className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
                      value={car.usage || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFleetCars((prev) =>
                          prev.map((row, i) =>
                            i === idx ? { ...row, usage: value } : row
                          )
                        );
                      }}
                    >
                      <option value="">Select vehicle usage</option>
                      <option value="private">Private</option>
                      <option value="school Bus">School Bus</option>
                      <option value="ambulance">Ambulance</option>
                      <option value="forhire">For hire</option>
                      <option value="Taxi/Transport of Passengers">
                        Taxi/Transport of Passengers
                      </option>
                    </select>
                  </div>

                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    <div className="w-full flex flex-col gap-2.5">
                      <div className="relative">
                        <input
                          type="text"
                          name="chassisNumberFleet"
                          value={car.chassis_no || car["Chassis No"] || ""}
                          placeholder={
                            car["Chassis No"] || "Enter chassis number"
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            setFleetCars((prev) =>
                              prev.map((row, i) =>
                                i === idx
                                  ? {
                                      ...row,
                                      chassis_no: value,
                                      notFound: false,
                                    }
                                  : row
                              )
                            );
                          }}
                          className="w-full px-2 py-2 bg-white rounded border border-neutral-200 text-zinc-500 text-xs pr-10"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="cursor-pointer"
                            disabled={
                              !(car.chassis_no || car["Chassis No"]) ||
                              !(car.usage || car["Usage"]) ||
                              rowLoading[idx]
                            }
                            onClick={() =>
                              handleFleetSearch(
                                idx,
                                car.chassis_no || car["Chassis No"] || "",
                                car.usage || car["Usage"] || ""
                              )
                            }
                          >
                            {rowLoading[idx] ? (
                              <span className="spinner"></span>
                            ) : (
                              <Icon
                                icon="iconamoon:search"
                                width="14"
                                height="14"
                              />
                            )}
                          </button>
                        </div>
                      </div>
                      {car.notFound && (
                        <div className="text-xs text-red-500 mt-1">
                          No car available
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pb-1 pt-1 border-b border-slate-200 text-stone-900 text-xs text-center">
                    {car.year_of_manufacture ||
                      car["Year of Manufacture"] ||
                      "-"}
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
                      onClick={() => {
                        setCarToDeleteIdx(idx);
                        setShowDeleteAlert(true);
                      }}
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
            onClick={() =>
              setFleetCars((prev) => [
                ...prev,
                { chassis_no: "", notFound: false },
              ])
            }
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
