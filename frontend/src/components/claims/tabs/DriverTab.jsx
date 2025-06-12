import React, { useState, useEffect } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const DriverTab = () => {
  const { user, token, setUser, setToken } = useStateContext();
  useEffect(() => {
    axiosClient
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.error(":", err);
      });
  }, []);

  const [whoWasDriving, setWhoWasDriving] = useState("me");
  const [driverLicenseDet, setDriverLicenseDet] = useState("upload_image");

  const uploadLicenseImage = () => (
    <div className="">
      <label className="block font-medium mb-2 text-xs">Upload driver license</label>
      <input type="file" className="input  w-full text-xs" />
    </div>
  );

  const fillInForm = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="">
          <label className="block font-medium mb-2 text-xs">First name</label>
          <input
            type="text"
            className="input  w-full text-xs"
            placeholder="Enter First name"
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Last name</label>
          <input
            type="text"
            className="input  w-full text-xs"
            placeholder="Enter Last name"
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Driving License Number</label>
          <input
            type="text"
            className="input  w-full text-xs"
            placeholder="Driving License Number"
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Category</label>
          <input
            type="text"
            className="input  w-full text-xs"
            placeholder="Category"
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Expiry Date </label>
          <input
            type="date"
            className="input  w-full text-xs" 
          />
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">Issued by</label>
          <input
            type="text"
            className="input  w-full text-xs"
            placeholder="Issued by"
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
            onChange={(e) => setWhoWasDriving(e.target.value)}
          >
            <option value="me">Me ({user?.name})</option>
            <option value="someone">Someone else</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      {whoWasDriving == "me" && (
        <>
          <div className="">
            <label className="block font-medium mb-2 text-xs">
              Driver's license details
            </label>
            <select
              className="input w-full text-xs"
              value={driverLicenseDet}
              onChange={(e) => setDriverLicenseDet(e.target.value)}
            >
              <option value="upload_image">Upload Image</option>
              <option value="fill_in_form">Fill in Form</option>
            </select>
          </div>

          {driverLicenseDet == "upload_image" && uploadLicenseImage()}
          {driverLicenseDet == "fill_in_form" && fillInForm()}
        </>
      )}

      {whoWasDriving == "someone" && (
        <>
           <div className="">
            <label className="block font-medium mb-2 text-xs">
              Driver's license details
            </label>
            <select
              className="input w-full text-xs"
              value={driverLicenseDet}
              onChange={(e) => setDriverLicenseDet(e.target.value)}
            >
              <option value="upload_image">Upload Image</option>
              <option value="fill_in_form">Fill in Form</option>
            </select>
          </div>

          {driverLicenseDet == "upload_image" && uploadLicenseImage()}
          {driverLicenseDet == "fill_in_form" && fillInForm()}


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <label className="block font-medium mb-2 text-xs">Phone number</label>
              <input
                type="text"
                className="input  w-full text-xs"
                placeholder="Enter phone number"
              />
            </div>
            <div className="">
              <label className="block font-medium mb-2 text-xs">
                Driver's Relationship to Owner
              </label>
              <select
                className="input w-full text-xs"
                // value={driverLicenseDet}
                // onChange={(e) => setDriverLicenseDet(e.target.value)}
              >
                <option>Family member</option>
                <option>Friend</option>
                <option>Employee</option>
                <option>Rental</option>
              </select>
            </div>
          </div>
        </>
      )}

     
    </form>
  );
};

export default DriverTab;
