import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const VehicleTabB = ({ vehicleInvolved, setVehicleInvolved, drivers }) => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState("");
  const [hasVehicleDetails, setHasVehicleDetails] = useState("no");
  const [hasDemagedArea, setHasDemagedArea] = useState("no");

  useEffect(() => {
    console.log(hasVehicleDetails);
  }, [hasVehicleDetails]);
  return (
    <div className="space-y-8 mt-6 file-claim-form">
      <div className="">
        <p className="text-sm text-gray-600">
          <strong>Other vehicles involved</strong>
        </p>
        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">
            Which driver are you going to add vehicle for
          </label>
          <select
            className="input w-full text-xs"
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
          >
            <option value="">Select</option>
            {drivers.map((driver, key) => {
              return (
                <option key={key} value={driver.id}>
                  {" "}
                  Driver {driver.id}
                </option>
              );
            })}
          </select>
        </div>
        {selectedDriver !== "" && (
          <>
            <div className="mt-3">
              <label className="block font-medium mb-2 text-xs">
                Do you have details of vehicle {selectedDriver.id}
              </label>
              <select
                className="input w-full text-xs"
                value={hasVehicleDetails}
                onChange={(e) => setHasVehicleDetails(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="i_have_some">I have some</option>
                <option value="no">No</option>
              </select>
            </div>

            {hasVehicleDetails == "yes" && (
              <>
                <VehicleDetailsForm driverId={selectedDriver} />
                <InsuranceDetailsFrom driverId={selectedDriver} />
              </>
            )}
            {(hasVehicleDetails == "no" ||
              hasVehicleDetails == "i_have_some") && (
              <>
                <WhyDetailsFrom driverId={selectedDriver} />
              </>
            )}

            <div className="mt-3">
              <label className="block font-medium mb-2 text-xs">
                Any demaged areas outside of vehicles?
              </label>
              <select
                className="input w-full text-xs"
                value={hasDemagedArea}
                onChange={(e) => setHasDemagedArea(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {hasDemagedArea == "yes" && (
              <>
                <DamagedOutsideFrom driverId={selectedDriver} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const VehicleDetailsForm = ({ driverId }) => {
  return (
    <>
      <p className="text-sm text-gray-600 mt-4">
        <strong>Details Of Vehicle {driverId}</strong>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">
            Make and model of vehicle?
          </label>
          <input
            className="input w-full text-xs"
            type="text"
            placeholder="Make and model of vehicle"
          />
        </div>

        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">Plate number</label>
          <input
            className="input w-full text-xs"
            type="text"
            placeholder="Plate number"
          />
        </div>
        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">
            Chassis number
          </label>
          <input
            className="input w-full text-xs"
            type="text"
            placeholder="Chassis number"
          />
        </div>
      </div>
    </>
  );
};

const InsuranceDetailsFrom = ({ driverId }) => {
  return (
    <>
      <p className="text-sm text-gray-600 mt-4">
        <strong>Insurance Details Of Vehicle {driverId}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">
            Insurance Name
          </label>
          <input
            className="input w-full text-xs"
            type="text"
            placeholder="Insurance name"
          />
        </div>

        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">
            Insurance Policy Number
          </label>
          <input
            className="input w-full text-xs"
            type="text"
            placeholder="Insurance policy number"
          />
        </div>
        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">Expiry Date</label>
          <input className="input w-full text-xs" type="date" />
        </div>
      </div>
    </>
  );
};

const WhyDetailsFrom = ({ driverId }) => {
  return (
    <>
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Briefly describe the details you have, and why you don't have other
          vehicle's details
        </label>
        <textarea
          className="input w-full h-32 resize text-xs"
          placeholder="Write here..."
        />
      </div>
    </>
  );
};

const DamagedOutsideFrom = ({ driverId }) => {
  const [skipImageUpload, setSkipImageUpload] = useState(false);
  return (
    <>
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Briefly describe the demaged area outside the vehicle involved, if any
        </label>
        <textarea
          className="input w-full h-32 resize text-xs"
          placeholder="Write here..."
        />
      </div>
      {skipImageUpload ? (
        <>
          <button
            type="button"
            className="bg-white text-custom-blue px-6 py-2 rounded-[5px] mt-4  transition custom-blue-border border border-custom-blue cursor-pointer"
            onClick={() => setSkipImageUpload(false)}
          >
            <Icon icon="gg:attachment" width="20" height="20" className="inline-block mr-3" />
            Attach images
          </button>
        </>
      ) : (
        <div>
          <label className="block font-medium mb-2 mt-4 text-xs">
            <div className="font-bold">Upload image of the following</div>
            <ul className="list-disc ml-4 mt-2">
              <li>Damaged vehicle</li>
              <li>Damaged property</li>
              <li>Surrounding areas</li>
              <li>Plate number</li>
            </ul>
          </label>
          <div className="flex justify-between items-center gap-3 w-full sm:w-1/2">
            <input
              className="input w-full text-xs"
              placeholder="Write here..."
              type="file"
            />
            <button
              className="bg-white text-custom-blue px-4 py-[6px] sm:px-6 rounded-[5px] transition custom-blue-border border border-custom-blue cursor-pointer"
              onClick={() => setSkipImageUpload(true)}
            >
              Skip
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default VehicleTabB;
