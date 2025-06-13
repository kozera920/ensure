import React, { useState } from "react";

const FileExternalClaim = () => {
  const [claimType, setClaimType] = useState("external");

  return (
    <div className="px-2 py-4 pt-0 text-xs sm:px-4 sm:py-6 file-claim-form">
      <h1 className="text-2xl sm:text-3xl font-bold text-custom-blue mb-4">
        External Claims
      </h1>

      <div className="bg-white rounded-xl shadow-md p-3 sm:p-6">
        <form>
          <div className="">
            <label className="block font-medium mb-2 text-xs">
              Select Claim Type
            </label>
            <select
              className="input w-full text-xs"
              value={claimType}
              onChange={(e) => setClaimType(e.target.value)}
            >
              <option value="transfer_letter">Transfer letter</option>
              <option value="material_damage">Material Damage</option>
              <option value="bodily_injury">Bodily Injury</option>
            </select>
          </div>

          {claimType === "transfer_letter" && transferLetterForm()}
        </form>

        <div className={`flex flex-col-reverse sm:flex-row mt-4 gap-2`}>
          <button
            type="button"
            className="bg-custom-blue text-white px-4 py-2 sm:px-6 rounded-[50px] transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const transferLetterForm = () => {
  return (
    <>
    <div className="mt-3">
            <label className="block font-medium mb-2 text-xs">
              Select appropriate insurance company for your third party claim
            </label>
            <select
              className="input w-full text-xs"
             
            >
              <option >Radiant</option> 
            </select>
          </div>


          <div className="mt-3">
            <div className="">
              <strong className="block font-bold mb-2 text-xs">
                Upload your transfer letter
              </strong>
              <p className="text-xs text-gray-500">
                Please upload the transfer letter you received from your insurance company.
              </p>
            </div>
            <label className="block font-medium mb-2 text-xs">
              Transfer letter
            </label>
            <input
              type="file"
              className="input w-full text-xs"
            />
          </div>
          </>
  );
};

export default FileExternalClaim;
