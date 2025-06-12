import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const DriverTabB = ({ vehicleInvolved, setVehicleInvolved, drivers, setDrivers }) => { 

  // Initialize drivers based on vehicleInvolved
  useEffect(() => {
    const numDrivers = vehicleInvolved > 1 ? vehicleInvolved - 1 : 1;
    const newDrivers = [];
    
    for (let i = 0; i < numDrivers; i++) {
      const driverId = String.fromCharCode(66 + i); // B=66, C=67, D=68, etc.
      newDrivers.push({
        id: driverId,
        haveDetails: 'no',
        inputType: 'fill_in_form',
        personalDetails: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          licenseNumber: '',
          category: '',
          expiryDate: '',
          issuedBy: ''
        },
        imageFile: null
      });
    }
    
    setDrivers(newDrivers);
  }, [vehicleInvolved]);

  const addNewDriver = () => {
    const nextDriverId = String.fromCharCode(66 + drivers.length);  
    const newDriver = {
      id: nextDriverId,
      haveDetails: 'no',
      inputType: 'fill_in_form',
      personalDetails: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        licenseNumber: '',
        category: '',
        expiryDate: '',
        issuedBy: ''
      },
      imageFile: null
    };
    const newDrivers = [...drivers, newDriver];
    setDrivers(newDrivers);
    // Update vehicleInvolved to reflect the new total (drivers + 1 for driver A)
    setVehicleInvolved(newDrivers.length + 1);
  };

  const removeDriver = (driverId) => {
    if (drivers.length > 1) {
      const newDrivers = drivers.filter(driver => driver.id !== driverId);
      setDrivers(newDrivers); 
      setVehicleInvolved(newDrivers.length + 1);
    }
  };

  const updateDriver = (driverId, field, value) => {
    setDrivers(drivers.map(driver => 
      driver.id === driverId 
        ? { ...driver, [field]: value }
        : driver
    ));
  };

  const updateDriverPersonalDetails = (driverId, field, value) => {
    setDrivers(drivers.map(driver => 
      driver.id === driverId 
        ? { 
            ...driver, 
            personalDetails: { ...driver.personalDetails, [field]: value }
          }
        : driver
    ));
  };

  return (
    <div className="space-y-8 mt-6 file-claim-form">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          <strong>Drivers involved ({vehicleInvolved} total)</strong>
        </p>
        
      </div>

      {drivers.map((driver, index) => (
        <DriverForm
          key={driver.id}
          driver={driver}
          canRemove={drivers.length > 1}
          onUpdate={updateDriver}
          onUpdatePersonalDetails={updateDriverPersonalDetails}
          onRemove={removeDriver}
        />
      ))}

        <div className="flex">
          <button
            type="button"
            onClick={addNewDriver}
            className="bg-custom-blue text-white px-4 py-2 rounded text-xs font-medium transition-colors"
          >
            Add another driver 
          </button>
        </div>
    </div>
  );
};

const DriverForm = ({ driver, canRemove, onUpdate, onUpdatePersonalDetails, onRemove }) => {
  return (
    <form className="space-y-6 mt-4 ">
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-gray-800">
          Personal details of driver {driver.id}
        </h4>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(driver.id)}
            className=" text-custom-gray px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer hover:bg-gray-200"
            title={`Remove driver ${driver.id}`}
          >
            <Icon icon="gg:remove" width="24" height="24" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block font-medium mb-2 text-xs">
            Do you have details of driver {driver.id}?
          </label>
          <select
            className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
            value={driver.haveDetails}
            onChange={(e) => onUpdate(driver.id, 'haveDetails', e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {driver.haveDetails === "yes" && (
          <>
            <div>
              <label className="block font-medium mb-2 text-xs">
                Select input option
              </label>
              <select
                className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
                onChange={(e) => onUpdate(driver.id, 'inputType', e.target.value)}
                value={driver.inputType}
              >
                <option value="fill_in_form">Fill in form</option>
                <option value="upload_image">Upload image</option>
              </select>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-4 text-gray-700">
                Personal details of driver {driver.id}
              </h4>
              {driver.inputType === "fill_in_form" && (
                <FillInForm 
                  driver={driver} 
                  onUpdatePersonalDetails={onUpdatePersonalDetails} 
                />
              )}
              {driver.inputType === "upload_image" && (
                <UploadImage 
                  driver={driver} 
                  onUpdate={onUpdate}
                  onUpdatePersonalDetails={onUpdatePersonalDetails} 
                />
              )}
            </div>
          </>
        )}
      </div>
      </div>
    </form>
  );
};

const FillInForm = ({ driver, onUpdatePersonalDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-2 text-xs">First name</label>
        <input
          type="text"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Enter first name"
          value={driver.personalDetails.firstName}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'firstName', e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-2 text-xs">Last name</label>
        <input
          type="text"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Enter last name"
          value={driver.personalDetails.lastName}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'lastName', e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-2 text-xs">Phone Number</label>
        <input
          type="tel"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Enter phone number"
          value={driver.personalDetails.phoneNumber}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'phoneNumber', e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-2 text-xs">
          Driving License Number
        </label>
        <input
          type="text"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Enter driving license number"
          value={driver.personalDetails.licenseNumber}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'licenseNumber', e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-2 text-xs">Category</label>
        <input
          type="text"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Enter category"
          value={driver.personalDetails.category}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'category', e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-2 text-xs">Expiry Date</label>
        <input
          type="date"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          value={driver.personalDetails.expiryDate}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'expiryDate', e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-2 text-xs">Issued by</label>
        <input
          type="text"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Issued by"
          value={driver.personalDetails.issuedBy}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'issuedBy', e.target.value)}
        />
      </div>
    </div>
  );
};

const UploadImage = ({ driver, onUpdate, onUpdatePersonalDetails }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-2 text-xs">
          Upload driver {driver.id}'s driving license image
        </label>
        <input 
          type="file" 
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          onChange={(e) => onUpdate(driver.id, 'imageFile', e.target.files[0])}
        />
      </div>

      <div>
        <label className="block font-medium mb-2 text-xs">Phone number</label>
        <input
          type="text"
          className="input w-full text-xs border border-gray-300 rounded px-3 py-2"
          placeholder="Enter phone number"
          value={driver.personalDetails.phoneNumber}
          onChange={(e) => onUpdatePersonalDetails(driver.id, 'phoneNumber', e.target.value)}
        />
      </div>
    </div>
  );
};

export default DriverTabB;