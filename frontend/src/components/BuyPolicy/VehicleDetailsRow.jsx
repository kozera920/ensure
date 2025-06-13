import React from "react";
import { Icon } from "@iconify/react";

const VehicleDetailsRow = ({
  vehicleCount,
  coverage,
  allExtensionsChecked,
  chassisNumber,
  setChassisNumber,
  setSearchChassis,
  vehicleUsage,
  setVehicleUsage,
  vehicleValue,
  setVehicleValue,
}) => (
  <div className="w-full flex flex-col md:flex-row gap-4">
    {vehicleCount === "one" && (
      <div className="w-full md:w-64 flex flex-col gap-2.5">
        <label className="text-stone-900 text-xs font-normal label-custom-blue">
          Vehicle Usage
        </label>
        <div className="relative">
          <select
            name="vehicleUsage"
            className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
            required
            value={vehicleUsage}
            onChange={(e) => setVehicleUsage(e.target.value)}
          >
            <option value="">Select vehicle usage</option>
            <option value="private">Private</option>
            <option value="school-bus">School Bus</option>
            <option value="ambulance">Ambulance</option>
            <option value="for-hire">For hire</option>
            <option value="taxi">Taxi/Transport of Passengers</option>
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
            onClick={() => setSearchChassis(chassisNumber)}
          >
            <Icon icon="iconamoon:search" width="14" height="14" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default VehicleDetailsRow;