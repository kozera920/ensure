import React from "react";
import { Icon } from "@iconify/react";

const CoverageSelector = ({ coverage, setCoverage, vehicleCount, setVehicleCount }) => (
  <div className="w-full flex flex-col md:flex-row gap-4">
    <div className="w-full md:flex-1 flex flex-col gap-2.5">
      <label className="text-stone-900 text-xs font-normal label-custom-blue">
        Which coverage do you want?
      </label>
      <div className="relative">
        <select
          name="coverage"
          value={coverage}
          onChange={(e) => setCoverage(e.target.value)}
          className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
          required
        >
          <option value="">Choose Coverage</option>
          <option value="third-party">Third party coverage</option>
          <option value="comprehensive">Comprehensive coverage</option>
          <option value="third-party-plus">Third party+</option>
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Icon icon="basil:caret-down-solid" width="24" height="24" />
        </div>
      </div>
    </div>

    <div className="w-full md:flex-1 flex flex-col gap-2.5">
      <label className="text-stone-900 text-xs font-normal label-custom-blue">
        How many vehicles would you like to purchase for?
      </label>
      <div className="relative">
        <select
          name="vehicleCount"
          value={vehicleCount}
          onChange={(e) => setVehicleCount(e.target.value)}
          className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
          required
        >
          <option value="">Select policy</option>
          <option value="one">One vehicle</option>
          <option value="fleet">Fleet</option>
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Icon icon="basil:caret-down-solid" width="24" height="24" />
        </div>
      </div>
    </div>
  </div>
);

export default CoverageSelector;