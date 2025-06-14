import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import EditVehicleModal from "../BuyPolicy/EditVehicleModal.jsx";
import UploadVehicleImagesModal from "../BuyPolicy/UploadVehicleImagesModal.jsx";
import PremiumBreakDownModal from "./PremiumBreakDownModal.jsx";
import * as XLSX from "xlsx";
import CoverageSelector from "../../components/BuyPolicy/CoverageSelector.jsx";
import ExtensionsSelector from "../../components/BuyPolicy/ExtensionsSelector.jsx";
import VehicleDetailsRow from "../../components/BuyPolicy/VehicleDetailsRow.jsx";
import OwnershipAndCoverageRow from "../../components/BuyPolicy/OwnershipAndCoverageRow.jsx";
import VehicleTable from "../../components/BuyPolicy/VehicleTable.jsx";

const BuyNewPolicy = () => {
  const [coverage, setCoverage] = useState("");
  const [vehicleCount, setVehicleCount] = useState("one");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPremiumBreakdown, setShowPremiumBreakdown] = useState(false);
  //this cars variable is used in uploading excel and comparison in rra
  const [cars, setCars] = useState([]);
  const [chassisNumber, setChassisNumber] = useState("");
  const [searchChassis, setSearchChassis] = useState("");
  const [fleetFileName, setFleetFileName] = useState("");
  const [carToEdit, setCarToEdit] = useState(null);
  const [carToDeleteIdx, setCarToDeleteIdx] = React.useState(null);
  const [fleetCars, setFleetCars] = React.useState([]);

  const [singleCar, setSingleCar] = React.useState(null);

  //collection of state variables at top level for policy details when vechicle count is one
  const [vehicleUsage, setVehicleUsage] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [bankName, setBankName] = useState("");
  const [bodilyInjuryLimit, setBodilyInjuryLimit] = useState("1,000,000 RWF");
  const [coverPassengers, setCoverPassengers] = useState("No");
  const [comesaExtension, setComesaExtension] = useState("No");
  const [policyStartDate, setPolicyStartDate] = useState("");
  const [paymentInstallment, setPaymentInstallment] = useState("");
  const [singleCarImages, setSingleCarImages] = useState({});

  const [extensions, setExtensions] = useState({
    owndamage: false,
    theft: false,
    fire: false,
  });

  const handleExtensionChange = (e) => {
    const { name, checked } = e.target;
    setExtensions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const allExtensionsChecked = Object.values(extensions).every(Boolean);

  //handle excel upload
  const handleExcelFileUpload = (event,callback) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      if (callback) {
          callback(parsedData); 
        } else {
          setCars(parsedData); // fallback for old usage
          setShowEditModal(false);
          setCarToEdit(null);
        }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle form submission
    let formData;
    if (vehicleCount === "one") {
      formData = {
        coverage,
        vehicleCount,
        vehicleUsage,
        vehicleValue,
        chassisNumber,
        ownershipStatus,
        bodilyInjuryLimit,
        coverPassengers,
        comesaExtension,
        policyStartDate,
        paymentMode,
        paymentInstallment,
        car: cars[0] || {},
        images: singleCarImages,
      };
    } else {
      formData = {
        coverage,
        vehicleCount,
        cars, // array of cars for fleet
        // add other fleet-level fields if needed
      };
    }
    try {
      const response = await fetch("https://your-api-endpoint.com/policies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const result = await response.json();
      alert("Form submitted successfully!", result);
      // Optionally reset form or redirect here
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  //handle save car
  const handleSaveCar = (updatedCar) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        // Use a unique identifier, e.g. chassis_no or "Chassis No"
        (car.chassis_no && car.chassis_no === updatedCar.chassis_no) ||
        (car["Chassis No"] && car["Chassis No"] === updatedCar["Chassis No"])
          ? updatedCar
          : car
      )
    );
    setCarToEdit(null);
  };

  const handleDelete = () => {
    setShowDeleteAlert(false);
    if (vehicleCount === "one") {
      setCars(prev => prev.filter((_, i) => i !== carToDeleteIdx));
      setSearchChassis(""); 
    } else if (vehicleCount === "fleet") {
      setFleetCars(prev => prev.filter((_, i) => i !== carToDeleteIdx));
    }
    setCarToDeleteIdx(null);
  };

  //debug

  return (
    <div className="w-full max-w-[1090px] bg-white rounded-lg shadow-[0px_8px_16px_0px_rgba(226,190,253,0.15)] mx-auto overflow-hidden">
      {/* . Show Edit modal if open */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-modal bg-opacity-20">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl z-10 cursor-pointer"
              onClick={() => setShowEditModal(false)}
            >
              &times;
            </button>
            {showEditModal && carToEdit && (
              <EditVehicleModal
                coverage={coverage}
                setOwnershipStatus={setOwnershipStatus}
                ownershipStatus={ownershipStatus}
                car={carToEdit}
                setCarToEdit={setCarToEdit}
                setShowEditModal={setShowEditModal}
                onSaveCar={handleSaveCar}
              />
            )}
          </div>
        </div>
      )}

      {/* . Show upload modal if open */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-modal bg-opacity-20">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl z-10 cursor-pointer"
              onClick={() => setShowUploadModal(false)}
            >
              &times;
            </button>
            <UploadVehicleImagesModal
              images={singleCarImages}
              setImages={setSingleCarImages}
              onSave={() => setShowUploadModal(false)}
            />
          </div>
        </div>
      )}

      {/* Custom Delete Alert Modal */}
      {showDeleteAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-modal bg-opacity-40">
          <div className="w-80 p-8 bg-white rounded-2xl inline-flex flex-col justify-start items-center gap-10 overflow-hidden">
            <div className="self-stretch text-center text-black text-md font-semibold font-['Open_Sans']">
              Are you sure you want to remove this Vehicle?
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-2.5">
              <button
                className="px-8 py-1 rounded-[50px] outline outline-[1.5px] outline-sky-800 flex justify-start items-center gap-5 overflow-hidden cursor-pointer text-sm"
                onClick={handleDelete}
              >
                <span className="text-sky-800 text-base font-semibold font-['Open_Sans']">
                  Yes, Remove
                </span>
              </button>
              <button
                className="flex-1 px-10 px-8 py-1 bg-sky-800 rounded-[50px] outline outline-[1.5px] outline-offset-[-1.5px] flex justify-center items-center gap-5 overflow-hidden cursor-pointer text-sm"
                onClick={() => setShowDeleteAlert(false)}
              >
                <span className="text-white text-base font-semibold font-['Open_Sans']">
                  No
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* . Show Premium Breakdown modal if open */}
      {showPremiumBreakdown && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-modal bg-opacity-20">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl z-10 cursor-pointer"
              onClick={() => setShowPremiumBreakdown(false)}
            >
              &times;
            </button>
            <PremiumBreakDownModal />
          </div>
        </div>
      )}

      {/* 2. Form for buying a new policy */}
      <form
        onSubmit={handleSubmit}
        className="p-4 md:pt-4 pl-5 pr-5 pb-4 flex flex-col justify-center items-center gap-6 md:gap-6"
      >
        {/* First row - two equal width inputs */}
        <CoverageSelector
          coverage={coverage}
          setCoverage={setCoverage}
          vehicleCount={vehicleCount}
          setVehicleCount={setVehicleCount}
        />

        {coverage === "third-party-plus" && (
          <ExtensionsSelector
            extensions={extensions}
            handleExtensionChange={handleExtensionChange}
          />
        )}

        {/* Second row - two inputs (smaller on desktop) */}
        <VehicleDetailsRow
          vehicleCount={vehicleCount}
          coverage={coverage}
          allExtensionsChecked={allExtensionsChecked}
          chassisNumber={chassisNumber}
          setChassisNumber={setChassisNumber}
          setSearchChassis={setSearchChassis}
          setVehicleUsage={setVehicleUsage}
          vehicleUsage={vehicleUsage}
          setVehicleValue={setVehicleValue}
          vehicleValue={vehicleValue}
          singleCar={singleCar}
          setSingleCar={setSingleCar}
        />

        {/* Vehicle table for displaying vehicles */}
        <VehicleTable
          vehicleCount={vehicleCount}
          cars={cars}
          setCars={setCars}
          searchChassis={searchChassis}
          chassisNumber={chassisNumber}
          setShowDeleteAlert={setShowDeleteAlert}
          setShowEditModal={setShowEditModal}
          handleExcelFileUpload={handleExcelFileUpload}
          fleetFileName={fleetFileName}
          setFleetFileName={setFleetFileName}
          setCarToEdit={setCarToEdit}
          setCarToDeleteIdx={setCarToDeleteIdx}
          fleetCars={fleetCars}
          setFleetCars={setFleetCars}
          singleCar={singleCar}
          setSingleCar={setSingleCar} 
        />

        {/* Ownership status,coverage of passengers,bodily injury */}
        <OwnershipAndCoverageRow
          vehicleCount={vehicleCount}
          ownershipStatus={ownershipStatus}
          setOwnershipStatus={setOwnershipStatus}
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
          coverage={coverage}
          showUploadModal={showUploadModal}
          setShowUploadModal={setShowUploadModal}
          bankName={bankName}
          setBankName={setBankName}
          bodilyInjuryLimit={bodilyInjuryLimit}
          setBodilyInjuryLimit={setBodilyInjuryLimit}
          coverPassengers={coverPassengers}
          setCoverPassengers={setCoverPassengers}
          comesaExtension={comesaExtension}
          setComesaExtension={setComesaExtension}
          policyStartDate={policyStartDate}
          setPolicyStartDate={setPolicyStartDate}
          paymentInstallment={paymentInstallment}
          setPaymentInstallment={setPaymentInstallment}
        />

        {/* Next button and Total Premium side by side */}
        <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-1/2 flex items-center justify-start">
            <button
              className="px-8 py-1 bg-custom-blue rounded-[50px] text-white text-base font-semibold w-full md:w-auto cursor-pointer"
              onClick={() => setShowPremiumBreakdown(true)}
            >
              Next
            </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-end">
            <div
              type="submit"
              className="px-8 py-1 bg-custom-blue rounded-[50px] text-white text-base font-semibold w-full md:w-auto"
            >
              Total Premium: 50,545 RWF
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyNewPolicy;
