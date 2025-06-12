import React, { useEffect, useState } from "react";
import DriverTab from "../components/claims/tabs/DriverTab";
import StoryTab from "../components/claims/tabs/StoryTab";
import VehicleTab from "../components/claims/tabs/VehicleTab";
import PoliceTab from "../components/claims/tabs/PoliceTab";
import InjuredPeopleTab from "../components/claims/tabs/InjuredPeopleTab";
import WitnessesTab from "../components/claims/tabs/WitnessTab";
import SummaryTab from "../components/claims/tabs/SummaryTab";
import DriverTabB from "../components/claims/tabs/DriverTabB";
import { Icon } from "@iconify/react";
import VehicleTabB from "../components/claims/tabs/VehicleTabB";

const tabs_ = [
  {
    label: "Story",
    icon: <Icon icon="simple-line-icons:book-open" width="28" height="28" />,
  },
  {
    label: "Driver",
    icon: (
      <Icon icon="healthicons:truck-driver-outline" width="32" height="32" />
    ),
  },
  {
    label: "Other Drivers",
    icon: (
      <Icon icon="healthicons:truck-driver-outline" width="32" height="32" />
    ),
  },
  {
    label: "Vehicle",
    icon: <Icon icon="bitcoin-icons:car-outline" width="32" height="32" />,
  },
  {
    label: "Other Vehicles",
    icon: <Icon icon="mdi:car-2-plus" width="32" height="32" />,
  },
  {
    label: "Police",
    icon: <Icon icon="streamline-cyber:police" width="28" height="28" />,
  },
  {
    label: "Injured people",
    icon: <Icon icon="la:user-injured" width="32" height="32" />,
  },
  {
    label: "Witnesses",
    icon: <Icon icon="fluent-mdl2:group" width="32" height="32" />,
  },
  {
    label: "Summary",
    icon: <Icon icon="solar:clipboard-linear" width="32" height="32" />,
  },
];

const FileAClaim = () => {
  const [activeTab, setActiveTab] = useState(tabs_[0]);
  const [vehicleInvolved, setVehicleInvolved] = useState(1);
  const [tabs, setTabs] = useState(tabs_);
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    story: {},
    driver: {},
    otherDrivers: [],
    vehicle: {},
    otherVehicles: [],
    police: {},
    injuredPeople: {},
    witnesses: {},
  });

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePreviousTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleFormDataChange = (tabName, data) => {
    setFormData((prev) => ({
      ...prev,
      [tabName]: data,
    }));
  };

  useEffect(() => {
    if (vehicleInvolved > 1) {
      if (!tabs.some((tab) => tab.label === "Other Drivers")) {
        const newTabs = [...tabs_];
        setTabs(newTabs);
      }

      if (!tabs.some((tab) => tab.label === "Other Vehicles")) {
        const newTabs = [...tabs_];
        setTabs(newTabs);
      }
    } else {
      var filteredTabs = tabs_.filter((tab) => tab.label !== "Other Drivers");
      filteredTabs = filteredTabs.filter(
        (tab) => tab.label !== "Other Vehicles"
      );
      setTabs(filteredTabs);

      if (activeTab.label === "Other Drivers") {
        setActiveTab(tabs_[1]);
      }

      if (activeTab.label === "Other Vehicles") {
        setActiveTab(tabs_[3]);
      }
    }
  }, [vehicleInvolved, activeTab.label]);

  const saveDraft = () => {
    console.log("Saving draft:", formData);
  };

  return (
    <div className="px-2 py-4 pt-0 text-xs sm:px-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-custom-blue mb-4">
        File a Claim
      </h1>

      <div className="bg-white rounded-xl shadow-md p-3 sm:p-6">
        {/* Save as draft */}
        <div className="flex justify-end mt-2 sm:mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 sm:px-5 rounded-[50px] hover:bg-gray-600 transition text-xs sm:text-sm cursor-pointer"
            onClick={saveDraft}
          >
            Save as draft
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-4 overflow-x-auto">
          <ul className="flex flex-wrap space-x-2 sm:space-x-4 text-xs uppercase sm:text-sm whitespace-nowrap file-claim-tab">
            {tabs.map((tab) => (
              <li
                key={tab.label}
                className={`cursor-pointer px-2 py-2 sm:px-3 border-b-2 flex gap-2 items-center ${
                  activeTab.label === tab.label
                    ? "border-[#064E89] text-custom-blue font-semibold"
                    : "border-transparent text-gray-500 hover:text-[#064E89]"
                }`}
                onClick={() => setActiveTab(tab)}
                style={{ minWidth: "max-content" }}
              >
                {tab.icon}
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          {activeTab.label === "Story" && (
            <StoryTab
              vehicleInvolved={vehicleInvolved}
              setVehicleInvolved={setVehicleInvolved}
              onFormDataChange={(data) => handleFormDataChange("story", data)}
            />
          )}
          {activeTab.label === "Driver" && (
            <DriverTab
              onFormDataChange={(data) => handleFormDataChange("driver", data)}
            />
          )}
          {activeTab.label === "Other Drivers" && (
            <DriverTabB
              vehicleInvolved={vehicleInvolved}
              setVehicleInvolved={setVehicleInvolved}
              drivers={drivers}
              setDrivers={setDrivers}
              onFormDataChange={(data) =>
                handleFormDataChange("otherDrivers", data)
              }
            />
          )}
          {activeTab.label === "Vehicle" && (
            <VehicleTab
              onFormDataChange={(data) => handleFormDataChange("vehicle", data)}
            />
          )}
          {activeTab.label === "Other Vehicles" && (
            <VehicleTabB
              vehicleInvolved={vehicleInvolved}
              setVehicleInvolved={setVehicleInvolved}
              drivers={drivers}
              onFormDataChange={(data) =>
                handleFormDataChange("otherVehicles", data)
              }
            />
          )}
          {activeTab.label === "Police" && (
            <PoliceTab
              onFormDataChange={(data) => handleFormDataChange("police", data)}
            />
          )}
          {activeTab.label === "Injured people" && (
            <InjuredPeopleTab
              onFormDataChange={(data) =>
                handleFormDataChange("injuredPeople", data)
              }
            />
          )}
          {activeTab.label === "Witnesses" && (
            <WitnessesTab
              onFormDataChange={(data) =>
                handleFormDataChange("witnesses", data)
              }
            />
          )}
          {activeTab.label === "Summary" && <SummaryTab formData={formData} />}
        </div>

        <div
          className={`flex flex-col-reverse sm:flex-row ${
            activeTab.label === "Story" ? "justify-end" : "justify-between"
          } mt-6 gap-2`}
        >
          {activeTab.label !== "Story" && (
            <button
              type="button"
              className="bg-white text-custom-blue px-4 py-2 sm:px-6 rounded-[50px] transition custom-blue-border border border-custom-blue"
              onClick={handlePreviousTab}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            className="bg-custom-blue text-white px-4 py-2 sm:px-6 rounded-[50px] transition cursor-pointer"
            onClick={handleNextTab}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileAClaim;
