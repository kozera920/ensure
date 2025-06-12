import { useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's missing marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const LocationPicker = ({ onSelect }) => {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
};

const GoToMyLocation = ({ setMarker }) => {
  const map = useMap();

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newLatLng = L.latLng(latitude, longitude);
        map.setView(newLatLng, 14); // Zoom to location
        setMarker(newLatLng);       // Drop marker
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-xs text-custom-blue flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm mb-2 absolute bottom-0 left-2 z-999 cursor-pointer"
    >
      <Icon icon="mdi:crosshairs-gps" className="text-base" />
      My Location
    </button>
  );
};

const StoryTab = ({ vehicleInvolved, setVehicleInvolved, onFormDataChange }) => {
  const [locationFillingType, setLocationFillingType] = useState("form");
  const [markerPosition, setMarkerPosition] = useState(null);
  const [formData, setFormData] = useState({
    vehiclesInvolved: vehicleInvolved,
    accidentDate: '',
    accidentTime: '',
    location: {
      type: 'form',
      coordinates: null,
      address: {
        province: '',
        district: '',
        sector: '',
        cell: '',
        village: ''
      }
    },
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'vehiclesInvolved') {
      setVehicleInvolved(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (onFormDataChange) {
      onFormDataChange({
        ...formData,
        [name]: value
      });
    }
  };

  const handleLocationTypeChange = (e) => {
    const type = e.target.value;
    setLocationFillingType(type);
    
    const updatedFormData = {
      ...formData,
      location: {
        ...formData.location,
        type
      }
    };
    
    setFormData(updatedFormData);
    if (onFormDataChange) onFormDataChange(updatedFormData);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      location: {
        ...formData.location,
        address: {
          ...formData.location.address,
          [name]: value
        }
      }
    };
    
    setFormData(updatedFormData);
    if (onFormDataChange) onFormDataChange(updatedFormData);
  };

  const handleMapLocationSelect = (latlng) => {
    setMarkerPosition(latlng);
    
    const updatedFormData = {
      ...formData,
      location: {
        ...formData.location,
        coordinates: {
          lat: latlng.lat,
          lng: latlng.lng
        }
      }
    };
    
    setFormData(updatedFormData);
    if (onFormDataChange) onFormDataChange(updatedFormData);
  };

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    const updatedFormData = {
      ...formData,
      description
    };
    
    setFormData(updatedFormData);
    if (onFormDataChange) onFormDataChange(updatedFormData);
  };

  const formatFormData = () => {
    return {
      accidentDetails: {
        date: formData.accidentDate,
        time: formData.accidentTime,
        vehiclesInvolved: parseInt(formData.vehiclesInvolved),
        description: formData.description
      },
      location: formData.location.type === 'map' ? {
        type: 'coordinates',
        lat: formData.location.coordinates?.lat,
        lng: formData.location.coordinates?.lng
      } : {
        type: 'address',
        ...formData.location.address
      }
    };
  };

  return (
    <form className="space-y-6 mt-6 file-claim-form">
      <p className="text-sm text-gray-600 text-xs">
        <strong>Note:</strong> Your claim will not be valid 5 week-days after the date of the accident
      </p>

      {/* Accident Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-2 text-xs">
            How many vehicles were involved
          </label>
          <input 
            type="number" 
            name="vehiclesInvolved"
            className="input w-full text-xs" 
            placeholder="Enter number of vehicles involved" 
            value={formData.vehiclesInvolved} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label className="block font-medium mb-2 text-xs">Date of Accident</label>
          <input 
            type="date" 
            name="accidentDate"
            className="input w-full text-xs" 
            value={formData.accidentDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block font-medium mb-2 text-xs">Time of Accident</label>
          <input 
            type="time" 
            name="accidentTime"
            className="input w-full text-xs" 
            value={formData.accidentTime}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Location Mode Toggle */}
      <div>
        <label className="block font-medium mb-2 text-xs">Location input method</label>
        <select
          className="input w-full text-xs"
          value={locationFillingType}
          onChange={handleLocationTypeChange}
        >
          <option value="form">Use form</option>
          <option value="map">Use map</option>
        </select>
      </div>

      {/* Map Picker */}
      {locationFillingType === "map" && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Icon icon="mdi:map-marker" className="text-red-500" />
            <span>Click on the map to select the location of the accident</span>
          </div>

          {/* My Location Button */}
          <MapContainer center={[-1.95, 30.06]} zoom={8} className="h-64 rounded overflow-hidden relative z-0">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationPicker onSelect={handleMapLocationSelect} />
            <GoToMyLocation setMarker={setMarkerPosition} />
            {markerPosition && <Marker position={markerPosition} />}
          </MapContainer>

          {markerPosition && (
            <div className="text-xs text-gray-700">
              <Icon icon="mdi:map-marker-radius-outline" className="inline-block mr-1 text-blue-500" />
              Selected location: Lat {markerPosition.lat.toFixed(5)}, Lng {markerPosition.lng.toFixed(5)}
            </div>
          )}
        </div>
      )}

      {/* Manual Location Form */}
      {locationFillingType === "form" && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <select 
            name="province"
            className="input text-xs"
            value={formData.location.address.province}
            onChange={handleAddressChange}
          >
            <option value="">Province</option>
          </select>
          <select 
            name="district"
            className="input text-xs"
            value={formData.location.address.district}
            onChange={handleAddressChange}
          >
            <option value="">District</option>
          </select>
          <select 
            name="sector"
            className="input text-xs"
            value={formData.location.address.sector}
            onChange={handleAddressChange}
          >
            <option value="">Sector</option>
          </select>
          <select 
            name="cell"
            className="input text-xs"
            value={formData.location.address.cell}
            onChange={handleAddressChange}
          >
            <option value="">Cell</option>
          </select>
          <select 
            name="village"
            className="input text-xs"
            value={formData.location.address.village}
            onChange={handleAddressChange}
          >
            <option value="">Village</option>
          </select>
        </div>
      )}

      {/* Description */}
      <div>
        <label className="block font-medium mb-2 mt-4 text-xs">
          In your words, explain what happened
        </label>
        <textarea 
          className="input w-full h-32 resize text-xs" 
          placeholder="Write here..."
          value={formData.description}
          onChange={handleDescriptionChange}
        />
      </div>
    </form>
  );
};

export default StoryTab;