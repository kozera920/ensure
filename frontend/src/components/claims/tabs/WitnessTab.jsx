import React, { useState } from 'react';

const WitnessesTab = ({ onFormDataChange }) => {
    const [formData, setFormData] = useState({
        hasWitnesses: "no",
        hasWitnessDetails: "no",
        witnesses: [
            {
                firstName: "",
                lastName: "",
                phoneNumber: "",
                witnessLocation: "Outside vehicle involved"
            }
        ]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === "hasWitnessDetails" && value === "no" && {
                witnesses: [{
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    witnessLocation: "Outside vehicle involved"
                }]
            })
        }));
        if (onFormDataChange) onFormDataChange(formatWitnessData(formData));
    };

    const handleWitnessChange = (index, field, value) => {
        const updatedWitnesses = [...formData.witnesses];
        updatedWitnesses[index] = {
            ...updatedWitnesses[index],
            [field]: value
        };
        
        const updatedData = {
            ...formData,
            witnesses: updatedWitnesses
        };
        
        setFormData(updatedData);
        if (onFormDataChange) onFormDataChange(formatWitnessData(updatedData));
    };

    const addWitness = () => {
        const newWitness = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            witnessLocation: "Outside vehicle involved"
        };
        
        const updatedData = {
            ...formData,
            witnesses: [...formData.witnesses, newWitness]
        };
        
        setFormData(updatedData);
        if (onFormDataChange) onFormDataChange(formatWitnessData(updatedData));
    };

    const formatWitnessData = (data) => {
        return {
            witnesses: {
                anyWitnesses: data.hasWitnesses === "yes",
                ...(data.hasWitnesses === "yes" && {
                    hasDetails: data.hasWitnessDetails === "yes",
                    ...(data.hasWitnessDetails === "yes" && {
                        count: data.witnesses.length,
                        details: data.witnesses.map(witness => ({
                            firstName: witness.firstName,
                            lastName: witness.lastName,
                            phoneNumber: witness.phoneNumber,
                            locationDuringAccident: witness.witnessLocation
                        }))
                    })
                })
            }
        };
    };

    const witnessDetails = (index) => { 
        const witness = formData.witnesses[index];
        
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        First Name
                    </label>
                    <input 
                        className="input w-full text-xs" 
                        type='text' 
                        placeholder='Enter first name'
                        value={witness.firstName}
                        onChange={(e) => handleWitnessChange(index, 'firstName', e.target.value)}
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
                        value={witness.lastName}
                        onChange={(e) => handleWitnessChange(index, 'lastName', e.target.value)}
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
                        value={witness.phoneNumber}
                        onChange={(e) => handleWitnessChange(index, 'phoneNumber', e.target.value)}
                    />
                </div>

                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Where was the witness?
                    </label>
                    <select 
                        className="input w-full text-xs"
                        value={witness.witnessLocation}
                        onChange={(e) => handleWitnessChange(index, 'witnessLocation', e.target.value)}
                    >
                        <option value="Outside vehicle involved">Outside vehicle involved</option>
                        <option value="Inside vehicle involved">Inside vehicle involved</option>
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
                <select 
                    className="input w-full text-xs" 
                    name="hasWitnessDetails"
                    value={formData.hasWitnessDetails} 
                    onChange={handleInputChange}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            
            {formData.hasWitnessDetails === "yes" && (
                <>
                    {formData.witnesses.map((witness, index) => (
                        <div key={index} className="mt-4 border border-gray-200 rounded-lg p-6 bg-gray-50">
                            <h3 className="text-sm font-bold mb-2">Witness {index + 1}</h3>
                            {witnessDetails(index)}
                        </div>
                    ))}

                    <div className="mt">
                        <button
                            type="button"
                            className="bg-custom-blue text-white px-6 py-2 rounded-[5px] transition mt-4 cursor-pointer"
                            onClick={addWitness}
                        >
                            Add another witness
                        </button>
                    </div>
                </>
            )}
        </>
    );

    return (
        <form className="space-y-6 mt-6 file-claim-form">
            <p className="text-sm text-gray-600">
                <strong>Witnesses</strong>
            </p>

            <div className="gap-4">
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Were there any witnesses at the accident scene?
                    </label>
                    <select
                        className="input w-full text-xs"
                        name="hasWitnesses"
                        value={formData.hasWitnesses}
                        onChange={handleInputChange}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            {formData.hasWitnesses === "yes" && peopleWitnessedForm()}
        </form>
    );
}

export default WitnessesTab;