import React, { useState, useEffect } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const DriverTab = ({ onFormDataChange }) => {
  const { user, token, setUser, setToken } = useStateContext();
  const [whoWasDriving, setWhoWasDriving] = useState("me");
  const [driverLicenseDet, setDriverLicenseDet] = useState("upload_image");
  const [formData, setFormData] = useState({
    driverType: "me",
    licenseDetailsType: "upload_image",
    licenseImage: null,
    firstName: "",
    lastName: "",
    licenseNumber: "",
    category: "",
    expiryDate: "",
    issuedBy: "",
    phoneNumber: "",
    relationshipToOwner: "",
    isCurrentUser: true
  });

  useEffect(() => {
    axiosClient.get("/user")
      .then(({ data }) => {
        setUser(data);
        // Pre-fill user data if driving themselves
        if (whoWasDriving === "me" && data) {
          const updatedData = {
            ...formData,
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            phoneNumber: data.phone || "",
            isCurrentUser: true
          };
          setFormData(updatedData);
          if (onFormDataChange) onFormDataChange(formatDriverData(updatedData));
        }
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  const handleDriverTypeChange = (e) => {
    const value = e.target.value;
    setWhoWasDriving(value);
    
    const updatedData = {
      ...formData,
      driverType: value,
      isCurrentUser: value === "me"
    };
    
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatDriverData(updatedData));
  };

  const handleLicenseDetailsTypeChange = (e) => {
    const value = e.target.value;
    setDriverLicenseDet(value);
    
    const updatedData = {
      ...formData,
      licenseDetailsType: value
    };
    
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatDriverData(updatedData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value
    };
    
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatDriverData(updatedData));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const updatedData = {
      ...formData,
      licenseImage: file
    };
    
    setFormData(updatedData);
    if (onFormDataChange) onFormDataChange(formatDriverData(updatedData));
  };

  const formatDriverData = (data) => {
    return {
      driverInformation: {
        type: data.driverType,
        isCurrentUser: data.driverType === "me",
        details: {
          method: data.licenseDetailsType,
          ...(data.licenseDetailsType === "upload_image" ? {
            licenseImage: data.licenseImage
          } : {
            firstName: data.firstName,
            lastName: data.lastName,
            licenseNumber: data.licenseNumber,
            category: data.category,
            expiryDate: data.expiryDate,
            issuedBy: data.issuedBy
          })
        },
        ...(data.driverType === "someone" && {
          contact: {
            phoneNumber: data.phoneNumber,
            relationshipToOwner: data.relationshipToOwner
          }
        })
      }
    };
  };

  const uploadLicenseImage = () => (
    <div className="">
      <label className="block font-medium mb-2 text-xs">Upload driver license</label>
      <input 
        type="file" 
        className="input w-full text-xs" 
        onChange={handleFileUpload}
        accept="image/*"
      />
    </div>
  );

  const fillInForm = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="">
          <label className="block font-medium mb-2 text-xs">First name</label>
          <input
            type="text"
            name="firstName"
            className="input w-full text-xs"
            placeholder="Enter First name"
            defaultValue={formData.firstName}
            onChange={handleInputChange}
            // disabled={whoWasDriving === "me"}
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Last name</label>
          <input
            type="text"
            name="lastName"
            className="input w-full text-xs"
            placeholder="Enter Last name"
            defaultValue={formData.lastName}
            onChange={handleInputChange}
            // disabled={whoWasDriving === "me"}
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Driving License Number</label>
          <input
            type="text"
            name="licenseNumber"
            className="input w-full text-xs"
            placeholder="Driving License Number"
            value={formData.licenseNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Category</label>
          <input
            type="text"
            name="category"
            className="input w-full text-xs"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            className="input w-full text-xs"
            value={formData.expiryDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Issued by</label>
          <input
            type="text"
            name="issuedBy"
            className="input w-full text-xs"
            placeholder="Issued by"
            value={formData.issuedBy}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );

  return (
    <form className="space-y-6 mt-6 file-claim-form">
      <p className="text-sm text-gray-600">
        <strong>Driver involved</strong>
      </p>

      <div className="gap-4">
        <div className="">
          <label className="block font-medium mb-2 text-xs">Who was driving?</label>
          <select
            className="input w-full text-xs"
            value={whoWasDriving}
            onChange={handleDriverTypeChange}
          >
            <option value="me">Me ({user?.name})</option>
            <option value="someone">Someone else</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      {whoWasDriving !== "none" && (
        <>
          <div className="">
            <label className="block font-medium mb-2 text-xs">
              Driver's license details
            </label>
            <select
              className="input w-full text-xs"
              value={driverLicenseDet}
              onChange={handleLicenseDetailsTypeChange}
            >
              <option value="upload_image">Upload Image</option>
              <option value="fill_in_form">Fill in Form</option>
            </select>
          </div>

          {driverLicenseDet === "upload_image" && uploadLicenseImage()}
          {driverLicenseDet === "fill_in_form" && fillInForm()}

          {whoWasDriving === "someone" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <label className="block font-medium mb-2 text-xs">Phone number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="input w-full text-xs"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
                <label className="block font-medium mb-2 text-xs">
                  Driver's Relationship to Owner
                </label>
                <select
                  name="relationshipToOwner"
                  className="input w-full text-xs"
                  value={formData.relationshipToOwner}
                  onChange={handleInputChange}
                >
                  <option value="">Select relationship</option>
                  <option value="family">Family member</option>
                  <option value="friend">Friend</option>
                  <option value="employee">Employee</option>
                  <option value="rental">Rental</option>
                </select>
              </div>
            </div>
          )}
        </>
      )}
    </form>
  );
};

export default DriverTab;