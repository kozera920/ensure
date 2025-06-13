import React, { useState, useEffect } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const VehicleTab = ({ onFormDataChange }) => {
  const { user, token, setUser, setToken } = useStateContext();
  const [formData, setFormData] = useState({
    wasDamaged: "no",
    isDrivable: "no",
    wasTowed: "no",
    vehicleLocation: "garage",
    damageDescription: "",
    garage: {
      name: "",
      contactPerson: "",
      phoneNumber: ""
    }
  });

  useEffect(() => {
    axiosClient.get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const handleGarageChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      garage: {
        ...formData.garage,
        [name]: value
      }
    };
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatVehicleData(updatedData));
  };

  const formatVehicleData = () => {
    return {
      vehicleInformation: {
        wasDamaged: formData.wasDamaged === "yes",
        ...(formData.wasDamaged === "yes" && {
          damageDetails: {
            isDrivable: formData.isDrivable === "yes",
            wasTowed: formData.wasTowed === "yes",
            description: formData.damageDescription,
            ...(formData.wasTowed === "yes" && {
              location: {
                type: formData.vehicleLocation,
                ...(formData.vehicleLocation === "garage" && {
                  garageDetails: {
                    name: formData.garage.name,
                    contactPerson: formData.garage.contactPerson,
                    phoneNumber: formData.garage.phoneNumber
                  }
                })
              }
            })
          }
        })
      }
    };
  };

  const isTowedForm = () => (
    <>
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Briefly describe the damage to your vehicle
        </label>
        <textarea
          className="input w-full h-32 resize-none text-xs"
          placeholder="Write here..."
          value={formData.damageDescription}
          onChange={(e) => handleInputChange({
            target: {
              name: "damageDescription",
              value: e.target.value
            }
          })}
        />
      </div>

      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Where is your vehicle currently?
        </label>
        <select
          className="input w-full text-xs"
          name="vehicleLocation"
          value={formData.vehicleLocation}
          onChange={handleInputChange}
        >
          <option value="i_have_vehicle">I have vehicle</option>
          <option value="garage">Garage</option>
        </select>
      </div>

      {formData.vehicleLocation === "garage" && isInGarageForm()}
    </>
  );

  const isDamagedForm = () => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="block font-medium mb-2 text-xs">
            Is your vehicle drivable?
          </label>
          <select 
            className="input w-full text-xs"
            name="isDrivable"
            value={formData.isDrivable}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">
            Was your vehicle towed (on break-down)?
          </label>
          <select 
            className="input w-full text-xs" 
            name="wasTowed"
            value={formData.wasTowed}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </div>
      {formData.wasTowed === "yes" && isTowedForm()}
    </>
  );

  const isInGarageForm = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-2 mt-4 text-xs">
            Garage Name
          </label>
          <input 
            type="text" 
            className="input w-full text-xs" 
            placeholder="Enter garage name"
            name="name"
            value={formData.garage.name}
            onChange={handleGarageChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-2 mt-4 text-xs">
            Contact Person
          </label>
          <input 
            type="text"  
            className="input w-full text-xs" 
            placeholder="Enter person's name"
            name="contactPerson"
            value={formData.garage.contactPerson}
            onChange={handleGarageChange}
          />
        </div>
      </div>
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Phone number
        </label>
        <input 
          type="tel"  
          className="input w-full text-xs" 
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.garage.phoneNumber}
          onChange={handleGarageChange}
        />
      </div>
    </>
  );

  return (
    <form className="space-y-6 mt-6 file-claim-form">
      <p className="text-sm text-gray-600">
        <strong>Vehicle involved</strong>
      </p>

      <div className="gap-4">
        <div className="">
          <label className="block font-medium mb-2 text-xs">
            Was your vehicle damaged?
          </label>
          <select
            className="input w-full text-xs"
            name="wasDamaged"
            value={formData.wasDamaged}
            onChange={handleInputChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {formData.wasDamaged === "yes" && isDamagedForm()}
    </form>
  );
};

export default VehicleTab;