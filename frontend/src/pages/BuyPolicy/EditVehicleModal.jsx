import React,{useState,useEffect} from "react";
import UploadVehicleImagesFleet from "./UploadVehicleImagesFleet.jsx";
import VehicleTableHeader from "../../components/BuyPolicy/VehicleTableHeader.jsx";

const EditVehicleModal = ({
  coverage,
  ownershipStatus,
  car,
  setShowEditModal,
  onSaveCar
}) => {
  const [vehicleUsage, setVehicleUsage] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [localOwnershipStatus, setLocalOwnershipStatus] = useState(ownershipStatus || "");
  const [bankName, setBankName] = useState("");
  const [localBodilyInjuryLimit, setLocalBodilyInjuryLimit] = useState("1,000,000 RWF");
  const [localCoverPassengers, setLocalCoverPassengers] = useState("No");
  const [localComesaExtension, setLocalComesaExtension] = useState("No");
  const [policyStartDate, setPolicyStartDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("monthly");
  const [LocalPaymentInstallment, setLocalPaymentInstallment] = useState("");
  const [images, setImages] = useState({});
  

    useEffect(() => {
    setVehicleUsage(car?.usage || "");
    setVehicleValue(car?.value || "");
    setLocalOwnershipStatus(car?.ownershipStatus || ownershipStatus || "");
    setBankName(car?.bankName || "");
    setLocalBodilyInjuryLimit(car?.bodilyInjuryLimit || "1,000,000 RWF");
    setLocalCoverPassengers(car?.coverPassengers || "No");
    setLocalComesaExtension(car?.comesaExtension || "No");
    setPolicyStartDate(car?.policyStartDate || "");
    setPaymentMode(car?.paymentMode || "monthly");
    setLocalPaymentInstallment(car?.paymentInstallment || "");
    setImages(car?.images || {});
    
    // ...populate more fields as needed
  }, [car, ownershipStatus]);
  
  //handle submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build updated car object
    const updatedCar = {
      ...car,
      usage: vehicleUsage,
      value: vehicleValue,
      ownershipStatus: localOwnershipStatus,
      bankName,
      bodilyInjuryLimit: localBodilyInjuryLimit,
      coverPassengers: localCoverPassengers,
      comesaExtension: localComesaExtension,
      policyStartDate,
      paymentMode,
      paymentInstallment: LocalPaymentInstallment,
      images
      // ...add more fields as needed
    };
    onSaveCar(updatedCar);
    setShowEditModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto relative">
      {/* Header */}
      <div className="mb-6">
        <div className="grid grid-cols-6 bg-gray-50 rounded-t-lg">
          <div className="py-2 px-2 text-xs font-bold text-center border-r border-zinc-200">
            Year
          </div>
          <div className="py-2 px-2 text-xs font-bold text-center border-r border-zinc-200">
            Make
          </div>
          <div className="py-2 px-2 text-xs font-bold text-center border-r border-zinc-200">
            Model
          </div>
          <div className="py-2 px-2 text-xs font-bold text-center border-r border-zinc-200">
            Seats No
          </div>
          <div className="py-2 px-2 text-xs font-bold text-center border-r border-zinc-200">
            Category
          </div>
          <div className="py-2 px-2 text-xs font-bold text-center">
            Plate No
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="py-2 px-2 text-xs text-center border-b border-zinc-100">
            {car?.year_of_manufacture || car?.["Year of Manufacture"] || "-"}
          </div>
          <div className="py-2 px-2 text-xs text-center border-b border-zinc-100">
            {car?.make || car?.["Make"] || "-"}
          </div>
          <div className="py-2 px-2 text-xs text-center border-b border-zinc-100">
            {car?.model || car?.["Model"] || "-"}
          </div>
          <div className="py-2 px-2 text-xs text-center border-b border-zinc-100">
            {car?.seats_no || car?.["Seats No"] || "-"}
          </div>
          <div className="py-2 px-2 text-xs text-center border-b border-zinc-100">
            {car?.category || car?.["Category"] || "-"}
          </div>
          <div className="py-2 px-2 text-xs text-center border-b border-zinc-100">
            {car?.plate_no || car?.["Plate No"] || "-"}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-medium text-stone-900 mb-1">
            Vehicle Usage
          </label>
          <select className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
          value={vehicleUsage}
          onChange={e => setVehicleUsage(e.target.value)}
          >
            <option value="">Select vehicle usage</option>
            <option value="Private">Private</option>
            <option value="School Bus">School Bus</option>
            <option value="Ambulance">Ambulance</option>
            <option value="For hire">For hire</option>
            <option value="Taxi/Transport of Passengers">Taxi/Transport of Passengers</option>
          </select>
        </div>
        {(coverage === "comprehensive" || coverage === "third-party-plus") && (
          <div>
            <label className="block text-xs font-medium text-stone-900 mb-1">
              Current Vehicle Value
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
              placeholder="Enter vehicle value"
              value={vehicleValue}
              onChange={(e) => setVehicleValue(e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-stone-900 mb-1">
            Ownership status?
          </label>
          <select
            name="ownershipStatus"
            className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
            value={localOwnershipStatus}
            onChange={e => setLocalOwnershipStatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="own">I own this car</option>
            <option value="financed">This car is financed</option>
          </select>
        </div>
        {localOwnershipStatus === "financed" && (
          <div>
            <label className="block text-xs font-medium text-stone-900 mb-1">
              Which Bank?
            </label>
            <input
              type="text"
              name="bankName"
              placeholder="Enter Bank Name"
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label className="block text-xs font-medium text-stone-900 mb-1">
            Select Bodily Injury Limit
          </label>
          <select className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
            value={localBodilyInjuryLimit}
            onChange={e => setLocalBodilyInjuryLimit(e.target.value)}
            required
          >
            <option value="1,000,000 RWF">1,000,000 RWF</option>
            <option value="2,000,000 RWF">2,000,000 RWF</option>
            <option value="3,000,000 RWF">3,000,000 RWF</option>
            <option value="4,000,000 RWF">4,000,000 RWF</option>
            <option value="5,000,000 RWF">5,000,000 RWF</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-900 mb-1">
            Do you want other passengers to be covered?
          </label>
          <select className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
          value={localCoverPassengers}
          onChange={e => setLocalCoverPassengers(e.target.value)}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-900 mb-1">
            Do you want to Add extension for COMESA countries?
          </label>
          <select className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
          value={localComesaExtension}
          onChange={e => setLocalComesaExtension(e.target.value)}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-900 mb-1">
              Policy Start Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
              placeholder="DD/MM/YYYY"
              value={policyStartDate}
              onChange={e => setPolicyStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-900 mb-1">
              Payment mode
            </label>
            <select className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
            value={paymentMode}
            onChange={e => setPaymentMode(e.target.value)}
            >
              <option value="monthly">Monthly installments</option>
              <option value="full_year">Full year price</option>
            </select>
          </div>
          {paymentMode === "monthly" && (
            <div>
            <label className="block text-xs font-medium text-stone-900 mb-1">
              Installment
            </label>
            <select className="w-full px-3 py-2 rounded border border-neutral-200 text-xs text-zinc-500 focus:outline-blue-400"
            value={LocalPaymentInstallment}
            onChange={e => setLocalPaymentInstallment(e.target.value)}>
              <option value="">Select installment</option>
              <option value="3/9 Plan">3/9 Plan</option>
              <option value="1/2/9 Plan">1/2/9 Plan</option>
              <option value="1/3/8 Plan">1/3/8 Plan</option>
              <option value="12 Plan">12 Plan</option>
              <option value="1/2/3/6 Plan">1/2/3/6 Plan</option>
              <option value="3/3/6 Plan">3/3/6 Plan</option>
              <option value="1/11 Plan">1/11 Plan</option>
            </select>
          </div>
          )}
          
        </div>
        {/* Upload Vehicle Images */}
        {(coverage === "comprehensive" || coverage === "third-party-plus") && (
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <label className="block text-xs font-medium text-stone-900 mb-1">
              Upload Vehicle Images
            </label>
            <UploadVehicleImagesFleet images={images} setImages={setImages} />
          </div>
        )}
        {/* Actions */}
        <div className="md:col-span-2 flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-1 bg-custom-blue rounded-[50px] text-white text-base font-semibold w-full md:w-auto hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer disabled:bg-blue-300"
          >
            Apply Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVehicleModal;
