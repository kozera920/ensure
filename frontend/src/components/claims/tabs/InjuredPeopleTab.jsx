import React, { useState } from 'react';

const InjuredPeopleTab = ({ onFormDataChange }) => {
    const [formData, setFormData] = useState({
        peopleInjured: "no",
        haveInjuredDetails: "no",
        injuredPeople: [
            {
                firstName: "",
                lastName: "",
                nationalId: "",
                dateOfBirth: "",
                address: "",
                phoneNumber: "",
                wentToHospital: "no",
                hospitalName: "",
                situation: "injured"
            }
        ]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === "haveInjuredDetails" && value === "no" && {
                injuredPeople: [{
                    firstName: "",
                    lastName: "",
                    nationalId: "",
                    dateOfBirth: "",
                    address: "",
                    phoneNumber: "",
                    wentToHospital: "no",
                    hospitalName: "",
                    situation: "injured"
                }]
            })
        }));
        if (onFormDataChange) onFormDataChange(formatInjuredPeopleData(formData));
    };

    const handleInjuredPersonChange = (index, field, value) => {
        const updatedInjuredPeople = [...formData.injuredPeople];
        updatedInjuredPeople[index] = {
            ...updatedInjuredPeople[index],
            [field]: value
        };
        
        const updatedData = {
            ...formData,
            injuredPeople: updatedInjuredPeople
        };
        
        setFormData(updatedData);
        if (onFormDataChange) onFormDataChange(formatInjuredPeopleData(updatedData));
    };

    const addInjuredPerson = () => {
        const newInjuredPerson = {
            firstName: "",
            lastName: "",
            nationalId: "",
            dateOfBirth: "",
            address: "",
            phoneNumber: "",
            wentToHospital: "no",
            hospitalName: "",
            situation: "injured"
        };
        
        const updatedData = {
            ...formData,
            injuredPeople: [...formData.injuredPeople, newInjuredPerson]
        };
        
        setFormData(updatedData);
        if (onFormDataChange) onFormDataChange(formatInjuredPeopleData(updatedData));
    };

    const formatInjuredPeopleData = (data) => {
        return {
            injuredPeople: {
                anyInjured: data.peopleInjured === "yes",
                ...(data.peopleInjured === "yes" && {
                    hasDetails: data.haveInjuredDetails === "yes",
                    ...(data.haveInjuredDetails === "yes" && {
                        count: data.injuredPeople.length,
                        details: data.injuredPeople.map(person => ({
                            personalInfo: {
                                firstName: person.firstName,
                                lastName: person.lastName,
                                nationalId: person.nationalId,
                                dateOfBirth: person.dateOfBirth,
                                address: person.address,
                                phoneNumber: person.phoneNumber
                            },
                            medicalInfo: {
                                hospitalVisit: person.wentToHospital === "yes",
                                ...(person.wentToHospital === "yes" && {
                                    hospitalName: person.hospitalName
                                }),
                                situation: person.situation
                            }
                        }))
                    })
                })
            }
        };
    };

    const injuredPeopleDetails = (index) => {
        const person = formData.injuredPeople[index];
        const wentToHospital = person.wentToHospital === "yes";
        
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        First Name
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='text' 
                        placeholder='Enter first name'
                        value={person.firstName}
                        onChange={(e) => handleInjuredPersonChange(index, 'firstName', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Last Name
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='text' 
                        placeholder='Enter last name'
                        value={person.lastName}
                        onChange={(e) => handleInjuredPersonChange(index, 'lastName', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        National ID
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='text' 
                        placeholder='Enter national ID'
                        value={person.nationalId}
                        onChange={(e) => handleInjuredPersonChange(index, 'nationalId', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Date of Birth
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='date'
                        value={person.dateOfBirth}
                        onChange={(e) => handleInjuredPersonChange(index, 'dateOfBirth', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Address
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='text' 
                        placeholder='Enter address'
                        value={person.address}
                        onChange={(e) => handleInjuredPersonChange(index, 'address', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Phone number
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='text' 
                        placeholder='Enter phone number'
                        value={person.phoneNumber}
                        onChange={(e) => handleInjuredPersonChange(index, 'phoneNumber', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Did the injured person go to the hospital?
                    </label>
                    <select
                        className="input w-full text-xs"
                        value={person.wentToHospital}
                        onChange={(e) => handleInjuredPersonChange(index, 'wentToHospital', e.target.value)}
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
                        <input 
                            className="input w-full text-xs" 
                            type='text' 
                            placeholder='Enter hospital name'
                            value={person.hospitalName}
                            onChange={(e) => handleInjuredPersonChange(index, 'hospitalName', e.target.value)}
                        />
                    </div>
                )}
                
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Situation of the injured person
                    </label>
                    <select 
                        className="input w-full text-xs"
                        value={person.situation}
                        onChange={(e) => handleInjuredPersonChange(index, 'situation', e.target.value)}
                    >
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
                <select 
                    className="input w-full text-xs" 
                    name="haveInjuredDetails"
                    value={formData.haveInjuredDetails} 
                    onChange={handleInputChange}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            
            {formData.haveInjuredDetails === "yes" && (
                <>
                    {formData.injuredPeople.map((person, index) => (
                        <div key={index} className="mt-4">
                            <h3 className="text-sm font-bold mb-2">Injured Person {index + 1}</h3>
                            {injuredPeopleDetails(index)}
                        </div>
                    ))}

                    <div className="mt">
                        <button
                            type="button"
                            className="bg-custom-blue text-white px-6 py-2 rounded-[5px] transition mt-4 cursor-pointer"
                            onClick={addInjuredPerson}
                        >
                            Add another injured person
                        </button>
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
                        name="peopleInjured"
                        value={formData.peopleInjured}
                        onChange={handleInputChange}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            {formData.peopleInjured === "yes" && peopleInjuredForm()}
        </form>
    );
}

export default InjuredPeopleTab;