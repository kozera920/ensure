import React, { useState, useEffect } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const VehicleTab = () => {
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


  const [wasYourVehicleDemaged, setWasYourVehicleDamaged] = useState("no");
  const [wasVehicleTowed, setWasVehicleTowed] = useState("no");
  const [whereIsVehicle, setWhereIsVehicle] = useState("garage");

  const isTowedForm = () => (
    <>
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Briefly describe the damage to your vehicle
        </label>
        <textarea
          className="input w-full h-32 resize-none text-xs"
          placeholder="Write here..."
        />
      </div>

      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          Where is your vehicle currently?
        </label>
        <select
          className="input w-full text-xs"
          value={whereIsVehicle}
          onChange={(e) => setWhereIsVehicle(e.target.value)}
        >
          <option value="i_have_vehicle">I have vehicle</option>
          <option value="garage">Garage</option>
        </select>
      </div>

      {whereIsVehicle == "garage" && (
        <>
          {isInGarageForm()}
        </>
      )}
    </>
  )

  const isDemagedForm = () => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <label className="block font-medium mb-2 text-xs">
            Is your vehicle drivable?
          </label>
          <select className="input w-full text-xs">
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <div className="">
          <label className="block font-medium mb-2 text-xs">
            Was your vehicle towed (on break-down)?
          </label>
          <select className="input w-full text-xs" value={wasVehicleTowed} onChange={(e) => setWasVehicleTowed(e.target.value)}>
            <option value={"no"}>No</option>
            <option value={"yes"}>Yes</option>
          </select>
        </div>
      </div>
      {
        wasVehicleTowed == "yes" && (
          <>
            {isTowedForm()}
          </>
        )
      }
    </>
  );

  const isInGarageForm = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-2 mt-4 text-xs">
            Garage Name
          </label>
          <input type="text" className="input w-full text-xs" placeholder="Enter garage name"/>
        </div>

        <div>
          <label className="block font-medium mb-2 mt-4 text-xs">
            Contact Person
          </label>
          <input type="text"  className="input w-full text-xs" placeholder="Enter person's name" />
        </div>
      </div>
      <div>
          <label className="block font-medium mb-2 mt-4 text-xs">
           Phone number
          </label>
          <input type="tel"  className="input w-full text-xs" placeholder="Phone number" />
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
            Who was your vehicle demaged?
          </label>
          <select
            className="input w-full text-xs"
            value={wasYourVehicleDemaged}
            onChange={(e) => setWasYourVehicleDamaged(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {wasYourVehicleDemaged == "yes" && (
        <>
          {isDemagedForm()}
        </>
      )}
    </form>
  );
};

export default VehicleTab;
