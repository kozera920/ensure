import React from "react";
import { Icon } from "@iconify/react";

const OwnershipAndCoverageRow = ({
  vehicleCount,
  ownershipStatus,
  setOwnershipStatus,
  paymentMode,
  setPaymentMode,
  coverage,
  setShowUploadModal,
  bankName,
  setBankName,
  bodilyInjuryLimit,
  setBodilyInjuryLimit,
  coverPassengers,
  setCoverPassengers,
  comesaExtension,
  setComesaExtension,
  policyStartDate,
  setPolicyStartDate,
  paymentInstallment,
  setPaymentInstallment,
}) => (
  <>
    {vehicleCount === "one" && (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal h-[32px] label-custom-blue">
            Ownership status?
          </label>
          <div className="relative">
            <select
              name="ownershipStatus"
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
              onChange={(e) => setOwnershipStatus(e.target.value)}
              value={ownershipStatus}
              required
            >
              <option value="">Select status</option>
              <option value="own">I own this car</option>
              <option value="financed">This car is financed</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="basil:caret-down-solid" width="24" height="24" />
            </div>
          </div>
        </div>

        {ownershipStatus === "financed" && (
          <div className="flex flex-col gap-2.5">
            <label className="text-stone-900 text-xs font-normal h-[32px] label-custom-blue">
              Which Bank?
            </label>
            <div className="relative">
              <input
                type="text"
                name="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter Bank Name"
                className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
                required
              />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal h-[32px] label-custom-blue">
            Select Bodily Injury Limit
          </label>
          <div className="relative">
            <select
              name="bodilyInjuryLimit"
              value={bodilyInjuryLimit}
              onChange={(e) => setBodilyInjuryLimit(e.target.value)}
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-stone-900 text-xs"
              required
            >
              <option value="1m">1,000,000 RWF</option>
              <option value="2m">2,000,000 RWF</option>
              <option value="3m">3,000,000 RWF</option>
              <option value="4m">4,000,000 RWF</option>
              <option value="5m">5,000,000 RWF</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="basil:caret-down-solid" width="24" height="24" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal h-[32px] label-custom-blue">
            Do you want other passengers to be covered?
          </label>
          <div className="relative">
            <select
              name="otherPassengers"
              value={coverPassengers}
              onChange={(e) => setCoverPassengers(e.target.value)}
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
              required
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="basil:caret-down-solid" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
    )}

    {/* COMESA and Upload Images */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {vehicleCount === "one" && (
        <div className="flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal h-[32px] label-custom-blue">
            Do you want to add territorial extension for COMESA countries?
          </label>
          <div className="relative">
            <select
              name="comesa"
              value={comesaExtension} // Assuming comesaExtension is a state variable
              onChange={(e) => setComesaExtension(e.target.value)}
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
              required
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="basil:caret-down-solid" width="24" height="24" />
            </div>
          </div>
        </div>
      )}
      {/* The upload button  */}
      {vehicleCount === "one" &&
        (coverage === "comprehensive" || coverage === "third-party-plus") && (
          <button className="self-stretch px-2.5 py-5 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-300 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden cursor-pointer"
          type="button"
          onClick={() => setShowUploadModal(true)}>            
            <div className="inline-flex justify-center items-center gap-[5px]">
              <div className="justify-start text-zinc-500 text-sm font-normal font-['Open_Sans']">
                Take photos of your vehicle
              </div>
              <div data-svg-wrapper>
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </div>
            </div>
          </button>
        )}
    </div>

    {/* Coverage period section */}
    {vehicleCount === "one" && (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal label-custom-blue">
            Select Policy Start Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={policyStartDate} 
              onChange={(e) => setPolicyStartDate(e.target.value)}
              name="policyStartDate"
              placeholder="DD/MM/YYYY"
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 text-zinc-500 text-xs pr-10"
              required
            />
            {/*<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="mdi:calendar-outline" width="24" height="24" />
            </div>*/}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-stone-900 text-xs font-normal label-custom-blue">
            Payment mode
          </label>
          <div className="relative">
            <select
              name="paymentMode"
              className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-stone-900 text-xs"
              required
              onChange={(e) => setPaymentMode(e.target.value)}
              value={paymentMode}
            >
              <option value="">Select</option>
              <option value="monthly">Monthly installments</option>
              <option value="yearly">Full year price</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Icon icon="basil:caret-down-solid" width="24" height="24" />
            </div>
          </div>
        </div>

        {paymentMode === "monthly" && (
          <div className="flex flex-col gap-2.5">
            <label className="text-stone-900 text-xs font-normal label-custom-blue">
              Installment
            </label>
            <div className="relative">
              <select
                name="installment"
                value={paymentInstallment}
                onChange={(e) => setPaymentInstallment(e.target.value)}
                className="w-full px-6 py-2 bg-white rounded border border-neutral-200 appearance-none text-zinc-500 text-xs"
                required
              >
                <option value="">Select installment</option>
                <option value="3-9">3/9 Plan</option>
                <option value="1-2-9">1/2/9 Plan</option>
                <option value="1-3-8">1/3/8 Plan</option>
                <option value="12">12 Plan</option>
                <option value="1-2-3-6">1/2/3/6 Plan</option>
                <option value="3-3-6">3/3/6 Plan</option>
                <option value="1-11">1/11 Plan</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Icon icon="basil:caret-down-solid" width="24" height="24" />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2.5">{/* Empty for layout */}</div>
      </div>
    )}
  </>
);

export default OwnershipAndCoverageRow;
