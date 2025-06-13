import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const VehicleTabB = ({
  vehicleInvolved,
  setVehicleInvolved,
  drivers,
  onFormDataChange,
}) => {
  const [formData, setFormData] = useState({
    selectedDriver: "",
    hasVehicleDetails: "no",
    hasDamagedArea: "no",
    vehicles: {},
  });

  const handleDriverSelect = (e) => {
    const driverId = e.target.value;
    const updatedData = {
      ...formData,
      selectedDriver: driverId,
      vehicles: {
        ...formData.vehicles,
        [driverId]: formData.vehicles[driverId] || {
          details: {},
          insurance: {},
          missingDetailsReason: "",
          damagedAreas: {
            description: "",
            images: [],
          },
        },
      },
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const handleVehicleDetailsChange = (e) => {
    const value = e.target.value;
    const updatedData = {
      ...formData,
      hasVehicleDetails: value,
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const handleDamagedAreaChange = (e) => {
    const value = e.target.value;
    const updatedData = {
      ...formData,
      hasDamagedArea: value,
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const handleInputChange = (driverId, section, field, value) => {
    const updatedData = {
      ...formData,
      vehicles: {
        ...formData.vehicles,
        [driverId]: {
          ...formData.vehicles[driverId],
          [section]: {
            ...formData.vehicles[driverId][section],
            [field]: value,
          },
        },
      },
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const handleFileUpload = (driverId, files) => {
    const updatedData = {
      ...formData,
      vehicles: {
        ...formData.vehicles,
        [driverId]: {
          ...formData.vehicles[driverId],
          damagedAreas: {
            ...formData.vehicles[driverId].damagedAreas,
            images: Array.from(files),
          },
        },
      },
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const formatVehicleData = (data) => {
    const formattedData = {
      otherVehicles: {},
    };

    if (data.selectedDriver) {
      formattedData.otherVehicles[data.selectedDriver] = {
        hasCompleteDetails: data.hasVehicleDetails === "yes",
        hasPartialDetails: data.hasVehicleDetails === "i_have_some",
        details: data.vehicles[data.selectedDriver]?.details || {},
        insurance: data.vehicles[data.selectedDriver]?.insurance || {},
        missingDetailsReason:
          data.vehicles[data.selectedDriver]?.missingDetailsReason || "",
        hasDamagedAreas: data.hasDamagedArea === "yes",
        damagedAreas: data.vehicles[data.selectedDriver]?.damagedAreas || {},
      };
    }

    return formattedData;
  };

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
            value={formData.selectedDriver}
            onChange={handleDriverSelect}
          >
            <option value="">Select</option>
            {drivers.map((driver, key) => (
              <option key={key} value={driver.id}>
                Driver {driver.id}
              </option>
            ))}
          </select>
        </div>
        {formData.selectedDriver !== "" && (
          <>
            <div className="mt-3">
              <label className="block font-medium mb-2 text-xs">
                Do you have details of vehicle {formData.selectedDriver}
              </label>
              <select
                className="input w-full text-xs"
                value={formData.hasVehicleDetails}
                onChange={handleVehicleDetailsChange}
              >
                <option value="yes">Yes</option>
                <option value="i_have_some">I have some</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.hasVehicleDetails === "yes" && (
              <>
                <VehicleDetailsForm
                  driverId={formData.selectedDriver}
                  data={
                    formData.vehicles[formData.selectedDriver]?.details || {}
                  }
                  onChange={(field, value) =>
                    handleInputChange(
                      formData.selectedDriver,
                      "details",
                      field,
                      value
                    )
                  }
                />
                <InsuranceDetailsFrom
                  driverId={formData.selectedDriver}
                  data={
                    formData.vehicles[formData.selectedDriver]?.insurance || {}
                  }
                  onChange={(field, value) =>
                    handleInputChange(
                      formData.selectedDriver,
                      "insurance",
                      field,
                      value
                    )
                  }
                />
              </>
            )}
            {(formData.hasVehicleDetails === "no" ||
              formData.hasVehicleDetails === "i_have_some") && (
              <WhyDetailsFrom
                driverId={formData.selectedDriver}
                value={
                  formData.vehicles[formData.selectedDriver]
                    ?.missingDetailsReason || ""
                }
                onChange={(value) =>
                  handleInputChange(
                    formData.selectedDriver,
                    "",
                    "missingDetailsReason",
                    value
                  )
                }
              />
            )}

            <div className="mt-3">
              <label className="block font-medium mb-2 text-xs">
                Any damaged areas outside of vehicles?
              </label>
              <select
                className="input w-full text-xs"
                value={formData.hasDamagedArea}
                onChange={handleDamagedAreaChange}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.hasDamagedArea === "yes" && (
              <DamagedOutsideFrom
                driverId={formData.selectedDriver}
                data={
                  formData.vehicles[formData.selectedDriver]?.damagedAreas || {}
                }
                onDescriptionChange={(value) =>
                  handleInputChange(
                    formData.selectedDriver,
                    "damagedAreas",
                    "description",
                    value
                  )
                }
                onFileUpload={(files) =>
                  handleFileUpload(formData.selectedDriver, files)
                }
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const VehicleDetailsForm = ({ driverId, data, onChange }) => {
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
            value={data.makeModel || ""}
            onChange={(e) => onChange("makeModel", e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">Plate number</label>
          <input
            className="input w-full text-xs"
            type="text"
            placeholder="Plate number"
            value={data.plateNumber || ""}
            onChange={(e) => onChange("plateNumber", e.target.value)}
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
            value={data.chassisNumber || ""}
            onChange={(e) => onChange("chassisNumber", e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

const InsuranceDetailsFrom = ({ driverId, data, onChange }) => {
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
            value={data.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
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
            value={data.policyNumber || ""}
            onChange={(e) => onChange("policyNumber", e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="block font-medium mb-2 text-xs">Expiry Date</label>
          <input
            className="input w-full text-xs"
            type="date"
            value={data.expiryDate || ""}
            onChange={(e) => onChange("expiryDate", e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

const WhyDetailsFrom = ({ driverId, value, onChange }) => {
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};

const DamagedOutsideFrom = ({
  driverId,
  data,
  onDescriptionChange,
  onFileUpload,
}) => {
  const [skipImageUpload, setSkipImageUpload] = useState(false);

  return (
    <>
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Briefly describe the damaged area outside the vehicle involved, if any
        </label>
        <textarea
          className="input w-full h-32 resize text-xs"
          placeholder="Write here..."
          value={data.description || ""}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
      </div>
      {skipImageUpload ? (
        <>
          <button
            type="button"
            className="bg-white text-custom-blue px-6 py-2 rounded-[5px] mt-4 transition custom-blue-border border border-custom-blue cursor-pointer"
            onClick={() => setSkipImageUpload(false)}
          >
            <Icon
              icon="gg:attachment"
              width="20"
              height="20"
              className="inline-block mr-3"
            />
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
              type="file"
              multiple
              onChange={(e) => onFileUpload(e.target.files)}
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
