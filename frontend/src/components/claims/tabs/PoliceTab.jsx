import React, { useState } from 'react';
const PoliceTab = () => {
    const [didPoliceArrive, setDidPoliceArrive] = useState("no");

    const policeArrivedForm = () => (
        <>
            <div className="">
                <label className="block font-medium mb-2 text-xs">
                    Did the police make an assessment?
                </label>
                <select className="input w-full text-xs">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Police Name
                    </label>
                    <input
                        type="text"
                        className="input w-full text-xs"
                        placeholder="Enter police name"
                    />
                </div>
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Police Number
                    </label>
                    <input
                        type="text"
                        className="input w-full text-xs"
                        placeholder="Enter police number"
                    />
                </div>
                <div className="">
                    <label className="block font-medium mb-2 text-xs">
                        Police Station
                    </label>
                    <input
                        type="text"
                        className="input w-full text-xs"
                        placeholder="Enter police station"
                    />
                </div>
            </div>
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
                        value={didPoliceArrive}
                        onChange={(e) => setDidPoliceArrive(e.target.value)}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            {didPoliceArrive == "yes" && (
                <>
                    {policeArrivedForm()}
                </>
            )}
        </form>
    );
}

export default PoliceTab;