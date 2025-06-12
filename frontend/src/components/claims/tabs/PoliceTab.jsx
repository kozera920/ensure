import React, { useState } from 'react';

const PoliceTab = ({ onFormDataChange }) => {
    const [formData, setFormData] = useState({
        didPoliceArrive: "no",
        policeAssessment: "no",
        policeDetails: {
            name: "",
            number: "",
            station: ""
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedData = {
            ...formData,
            [name]: value
        };
        setFormData(updatedData);
        if (onFormDataChange) onFormDataChange(formatPoliceData(updatedData));
    };

    const handlePoliceDetailsChange = (e) => {
        const { name, value } = e.target;
        const updatedData = {
            ...formData,
            policeDetails: {
                ...formData.policeDetails,
                [name]: value
            }
        };
        setFormData(updatedData);
        if (onFormDataChange) onFormDataChange(formatPoliceData(updatedData));
    };

    const formatPoliceData = (data) => {
        return {
            policeReport: {
                policePresent: data.didPoliceArrive === "yes",
                ...(data.didPoliceArrive === "yes" && {
                    assessmentMade: data.policeAssessment === "yes",
                    ...(data.policeAssessment === "yes" && {
                        officerDetails: {
                            name: data.policeDetails.name,
                            badgeNumber: data.policeDetails.number,
                            station: data.policeDetails.station
                        }
                    })
                })
            }
        };
    };

    const policeArrivedForm = () => (
        <>
            <div className="">
                <label className="block font-medium mb-2 text-xs">
                    Did the police make an assessment?
                </label>
                <select 
                    className="input w-full text-xs"
                    name="policeAssessment"
                    value={formData.policeAssessment}
                    onChange={handleInputChange}
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            {formData.policeAssessment === "yes" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="">
                        <label className="block font-medium mb-2 text-xs">
                            Police Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input w-full text-xs"
                            placeholder="Enter police name"
                            value={formData.policeDetails.name}
                            onChange={handlePoliceDetailsChange}
                        />
                    </div>
                    <div className="">
                        <label className="block font-medium mb-2 text-xs">
                            Police Number
                        </label>
                        <input
                            type="text"
                            name="number"
                            className="input w-full text-xs"
                            placeholder="Enter police number"
                            value={formData.policeDetails.number}
                            onChange={handlePoliceDetailsChange}
                        />
                    </div>
                    <div className="">
                        <label className="block font-medium mb-2 text-xs">
                            Police Station
                        </label>
                        <input
                            type="text"
                            name="station"
                            className="input w-full text-xs"
                            placeholder="Enter police station"
                            value={formData.policeDetails.station}
                            onChange={handlePoliceDetailsChange}
                        />
                    </div>
                </div>
            )}
        </>
    );

    return (
        <form className="space-y-6 mt-6 file-claim-form">
            <p className="text-sm text-gray-600">
                <strong>Police</strong>
            </p>

            <div className="gap-4">
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Did the police arrive at the accident scene?
                    </label>
                    <select
                        className="input w-full text-xs"
                        name="didPoliceArrive"
                        value={formData.didPoliceArrive}
                        onChange={handleInputChange}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            {formData.didPoliceArrive === "yes" && policeArrivedForm()}
        </form>
    );
}

export default PoliceTab;