import React, { useState } from 'react';
const WitnessesTab = () => 
{
 const [peopleWitnessed, setPeopleWitnessed] = useState("no");
     const [haveWitnessedDetails, setHaveWitnessedDetails] = useState("no");
     const [injuredPeopleNumber, setInjuredPeopleNumber] = useState(1); 
 
     const injuredPeopleDetails = (index) => { 
         return (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <div className="">
                     <label className="block font-medium mb-2 text-xs">
                         First Name
                     </label>
                     <input className="input w-full text-xs" type='text' placeholder='Enter first name' />
                 </div>
 
                 <div className="">
                     <label className="block font-medium mb-2 text-xs">
                         Last Name
                     </label>
                     <input className="input w-full text-xs" type='text' placeholder='Enter last name' />
                 </div>

                 <div className="">
                     <label className="block font-medium mb-2 text-xs">
                         Phone number
                     </label>
                     <input className="input w-full text-xs" type='text' placeholder='Enter phone number' />
                 </div>

                 <div className="">
                     <label className="block font-medium mb-2 text-xs">
                         Where was the witness?
                     </label>
                     <select className="input w-full text-xs" >
                         <option>Outside vehicle involved</option>
                         <option>Inside vehicle involved</option>
                     </select>
                 </div> 
             </div>
         );
     };
 
     const peopleWitnessedForm = () => (
         <>
             <div className="">
                 <label className="block font-medium mb-2 text-xs">
                     Do you have the witness details?
                 </label>
                 <select className="input w-full text-xs" value={haveWitnessedDetails} onChange={(e) => setHaveWitnessedDetails(e.target.value)}>
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                 </select>
             </div>
             {haveWitnessedDetails == "yes" && (
                 <>
                     <div className="">
                         <label className="block font-medium mb-2 text-xs">
                             How many witnesses do you have details for?
                         </label>
                         <input className="input w-full text-xs" type='number' value={injuredPeopleNumber} onChange={(e) => setInjuredPeopleNumber(e.target.value)} min={1} />
                     </div>
                     {injuredPeopleNumber > 0 && Array.from({ length: injuredPeopleNumber }, (_, index) => (
                         <div key={index} className="mt-4 border border-gray-200 rounded-lg p-6 bg-gray-50">
                             <h3 className="text-sm font-bold mb-2">Witness {index + 1}</h3>
                             {injuredPeopleDetails(index)}
                         </div>
                     ))}
 
                     <div className="mt">
                         <button
                             type="button"
                             className="bg-custom-blue text-white px-6 py-2 rounded-[5px] transition mt-4 cursor-pointer"
                             onClick={() => setInjuredPeopleNumber(injuredPeopleNumber + 1)}
                         >Add another witness</button>
                     </div>
                 </>
             )}
         </>
     );
 
 
     return (
         <form className="space-y-6 mt-6 file-claim-form">
             <p className="text-sm text-gray-600">
                 <strong>Witness</strong>
             </p>
 
             <div className="gap-4">
                 <div className="">
                     <label className="block font-medium mb-2 text-xs">
                         Were there any witnesses at the accident scene?
                     </label>
                     <select
                         className="input w-full text-xs"
                         value={peopleWitnessed}
                         onChange={(e) => setPeopleWitnessed(e.target.value)}
                     >
                         <option value="yes">Yes</option>
                         <option value="no">No</option>
                     </select>
                 </div>
             </div>
 
             {peopleWitnessed == "yes" && (
                 <>
                     {peopleWitnessedForm()}
                 </>
             )}
         </form>
     );
}

export default WitnessesTab;