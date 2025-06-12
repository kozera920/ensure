import React, { useState } from 'react';
const InjuredPeopleTab = () => {
    const [peopleInjured, setPeopleInjured] = useState("no");
    const [haveInjuredDetails, setHaveInjuredDetails] = useState("no");
    const [injuredPeopleNumber, setInjuredPeopleNumber] = useState(1);
    const [hospitalVisits, setHospitalVisits] = useState({});

    const injuredPeopleDetails = (index) => {
        const wentToHospital = hospitalVisits[index] === "yes";
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-200 rounded-lg p-6 bg-gray-50">
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
                        National ID
                    </label>
                    <input className="input w-full text-xs" type='text' placeholder='Enter national ID' />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Date of Birth
                    </label>
                    <input className="input w-full text-xs" type='date' />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Address
                    </label>
                    <input className="input w-full text-xs" type='text' placeholder='Enter address' />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Phone number
                    </label>
                    <input className="input w-full text-xs" type='text' placeholder='Enter phone number' />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Did the injured person go to the hospital?
                    </label>
                    <select
                        className="input w-full text-xs"
                        value={hospitalVisits[index] || "no"}
                        onChange={e =>
                            setHospitalVisits(prev => ({
                                ...prev,
                                [index]: e.target.value
                            }))
                        }
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {wentToHospital && (
                    <div className="">
                        <label className="block font-medium mb-2 text-xs">
                            Hospital name
                        </label>
                        <input className="input w-full text-xs" type='text' placeholder='Enter hospital name' />
                    </div>
                )}
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Situation of the injured person
                    </label>
                    <select className="input w-full text-xs">
                        <option value="injured">Injured</option>
                        <option value="died">Died</option>
                    </select>
                </div>
            </div>
        );
    };

    const peopleInjuredForm = () => (
        <>
            <div className="">
                <label className="block font-medium mb-2 text-xs">
                    Do you have the injured people details?
                </label>
                <select className="input w-full text-xs" value={haveInjuredDetails} onChange={(e) => setHaveInjuredDetails(e.target.value)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            {haveInjuredDetails == "yes" && (
                <>
                    <div className="">
                        <label className="block font-medium mb-2 text-xs">
                            How many people were injured?
                        </label>
                        <input className="input w-full text-xs" type='number' value={injuredPeopleNumber} onChange={(e) => setInjuredPeopleNumber(e.target.value)} min={1} />
                    </div>
                    {injuredPeopleNumber > 0 && Array.from({ length: injuredPeopleNumber }, (_, index) => (
                        <div key={index} className="mt-4">
                            <h3 className="text-sm font-bold mb-2">Injured Person {index + 1}</h3>
                            {injuredPeopleDetails(index)}
                        </div>
                    ))}

                    <div className="mt">
                        <button
                            type="button"
                            className="bg-custom-blue text-white px-6 py-2 rounded-[5px] transition mt-4 cursor-pointer"
                            onClick={() => setInjuredPeopleNumber(injuredPeopleNumber + 1)}
                        >Add another injured person</button>
                    </div>
                </>
            )}
        </>
    );


    return (
        <form className="space-y-6 mt-6 file-claim-form">
            <p className="text-sm text-gray-600">
                <strong>Injured people</strong>
            </p>

            <div className="gap-4">
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Are there injured people, even with minor injuries?
                    </label>
                    <select
                        className="input w-full text-xs"
                        value={peopleInjured}
                        onChange={(e) => setPeopleInjured(e.target.value)}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            {peopleInjured == "yes" && (
                <>
                    {peopleInjuredForm()}
                </>
            )}
        </form>
    );
}

export default InjuredPeopleTab;