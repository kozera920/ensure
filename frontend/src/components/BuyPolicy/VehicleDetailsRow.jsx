import React from "react";
import { Icon } from "@iconify/react";
import { fetchCarFromRRA } from "../../components/utils/api.js";

const VehicleDetailsRow = ({
  vehicleCount,
  coverage,
  allExtensionsChecked,
  chassisNumber,
  setChassisNumber,
  vehicleValue,
  setVehicleValue,
  vehicleUsage,
  setVehicleUsage,
  setSingleCar,
}) => {
  const [singleCarLoading, setSingleCarLoading] = React.useState(false);
  //const [singleCarError, setSingleCarError] = React.useState("");

  // Function to handle single car search
  // This function fetches car details from the RRA API based on chassis number and usage
  const handleSingleSearch = async (chassisNumber, usage) => {
    setSingleCarLoading(true);
    //setSingleCarError("");
    const found = await fetchCarFromRRA(chassisNumber, usage);
    if (found) {
      setSingleCar({
        ...found,
        chassis_no: found.vin,
        make: found.vehicleMake,
        model: found.vehicleModel,
        plate_no: found.platenumber,
        year_of_manufacture: found.year,
        category: found.genre,
        seats_no: found.seatingCapacity,
        usage,
      });
    } else {
      setSingleCar(null);
      //setSingleCarError("No car available");
    }
    setSingleCarLoading(false);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      {vehicleCount === "one" && (
        <div className="w-full md:w-64 flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal label-custom-blue">
            Vehicle Usage
          </label>
          <div className="relative">
            <select
              className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
              value={vehicleUsage || ""}
              onChange={(e) => setVehicleUsage(e.target.value)}
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
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="basil:caret-down-solid" width="24" height="24" />
            </div>
          </div>
        </div>
      )}

      {((coverage === "comprehensive" && vehicleCount === "one") ||
        (coverage === "third-party-plus" && vehicleCount === "one") ||
        (allExtensionsChecked && vehicleCount === "one")) && (
        <div className="w-full md:w-64 flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal label-custom-blue">
            Current Vehicle Value
          </label>
          <div className="relative">
            <input
              type="text"
              name="vehicleValue"
              placeholder="Enter vehicle value"
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 text-zinc-500 text-xs pr-10"
              required
              value={vehicleValue}
              onChange={(e) => setVehicleValue(e.target.value)}
            />
          </div>
        </div>
      )}
      {vehicleCount === "one" && (
        <div className="w-full md:w-64 flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal label-custom-blue">
            Chassis Number
          </label>
          <div className="relative">
            <input
              type="text"
              name="chassisNumber"
              value={chassisNumber}
              onChange={(e) => setChassisNumber(e.target.value)}
              placeholder="Enter chassis number"
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 text-zinc-500 text-xs pr-10"
              required
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleSingleSearch(chassisNumber, vehicleUsage)}
              >
                {singleCarLoading ? <span className="spinner"></span> : <Icon icon="iconamoon:search" width="14" height="14" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetailsRow;
