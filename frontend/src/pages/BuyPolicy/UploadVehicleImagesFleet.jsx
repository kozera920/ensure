import React, { useRef} from "react";
import { Icon } from "@iconify/react";
import car from "../../assets/images/buypolicy/car.png";

const cameraBtn =
  "bg-gray-200 rounded-full p-1 sm:p-1.5 shadow cursor-pointer flex items-center justify-center transition-transform hover:scale-105";


const UploadVehicleImagesFleet = ({images,setImages}) => {  
  
  const fileInputs = useRef({});

  const handleButtonClick = (pos) => {
    fileInputs.current[pos].click();
  };

  const handleFileChange = (pos, e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({
        ...prev,
        [pos]: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg px-2 sm:px-4 pt-10 sm:pt-14 pb-4 sm:pb-6 relative bg-white rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="w-full px-2 sm:px-3 py-2 sm:py-2 bg-neutral-100 rounded-lg flex justify-center items-center">
        <div className="text-black text-xs sm:text-sm font-normal font-['Open_Sans'] text-center leading-tight">
          Note: Take pictures of the vehicle according to the arrows below
        </div>
      </div>
      {/* Sides */}
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="w-full px-2 sm:px-3 py-2 sm:py-2 bg-zinc-300/20 rounded-lg flex flex-wrap justify-center items-center gap-4 sm:gap-10">
          <div className="text-black text-xs sm:text-sm font-normal font-['Open_Sans']">
            Driver side
          </div>
          <div className="text-black text-xs sm:text-sm font-normal font-['Open_Sans']">
            Passenger side
          </div>
        </div>

        {/* Vehicle Image and overlays */}
        <div className="flex justify-center items-center p-4">
          <div className="relative w-full max-w-sm">
            {/* Car image */}
            <img src={car} alt="Car" className="w-full h-auto" />

            {/* Lines and Camera Buttons */}
            {/* Top */}
             <div className="absolute top-0 left-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-full">
              <button
                type="button"
                className={cameraBtn}
                style={{ marginTop: 2 }}
                onClick={() => handleButtonClick("top")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["top"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("top", e)}
              />
              {images.top && (
                <img
                  src={images.top}
                  alt="Top"
                  className="w-10 h-10 mt-1 rounded"
                />
              )}
            </div>
            {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 flex flex-col items-center -translate-x-1/2 translate-y-full">
              <button
                type="button"
                className={cameraBtn}
                style={{ marginTop: 2 }}
                onClick={() => handleButtonClick("bottom")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["bottom"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("bottom", e)}
              />
              {images.bottom && (
                <img
                  src={images.bottom}
                  alt="Bottom"
                  className="w-10 h-10 mt-1 rounded"
                />
              )}
            </div>
            {/* Left Top */}
            <div className="absolute top-[15px] left-0 flex items-center -translate-x-full">
              <button
                type="button"
                className={cameraBtn + " ml-2"}
                onClick={() => handleButtonClick("leftTop")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["leftTop"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("leftTop", e)}
              />
              <div className="w-6 h-0.5 bg-gray-400 ml-1" />
              {images.leftTop && (
                <img
                  src={images.leftTop}
                  alt="Left Top"
                  className="w-10 h-10 ml-1 rounded"
                />
              )}
            </div>
            {/* Left Middle */}
            <div className="absolute top-1/2 left-0 flex items-center -translate-x-full -translate-y-1/2">
              <button
                type="button"
                className={cameraBtn + " ml-1"}
                onClick={() => handleButtonClick("leftMiddle")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["leftMiddle"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("leftMiddle", e)}
              />
              <div className="w-4 h-0.5 bg-gray-400 ml-0.5" />
              {images.leftMiddle && (
                <img
                  src={images.leftMiddle}
                  alt="Left Middle"
                  className="w-10 h-10 ml-1 rounded"
                />
              )}
            </div>
            {/* Left Bottom */}
            <div className="absolute bottom-[15px] left-0 flex items-center -translate-x-full">
              <button
                type="button"
                className={cameraBtn + " ml-2"}
                onClick={() => handleButtonClick("leftBottom")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["leftBottom"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("leftBottom", e)}
              />
              <div className="w-6 h-0.5 bg-gray-400 ml-1" />
              {images.leftBottom && (
                <img
                  src={images.leftBottom}
                  alt="Left Bottom"
                  className="w-10 h-10 ml-1 rounded"
                />
              )}
            </div>
            {/* Right Top */}
            <div className="absolute top-[15px] right-0 flex items-center translate-x-full">
              <div className="w-6 h-0.5 bg-gray-400 mr-1" />
              <button
                type="button"
                className={cameraBtn + " mr-2"}
                onClick={() => handleButtonClick("rightTop")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["rightTop"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("rightTop", e)}
              />
              {images.rightTop && (
                <img
                  src={images.rightTop}
                  alt="Right Top"
                  className="w-10 h-10 mr-1 rounded"
                />
              )}
            </div>
            {/* Right Middle */}
            <div className="absolute top-1/2 right-0 flex items-center translate-x-full -translate-y-1/2">
              <div className="w-4 h-0.5 bg-gray-400 mr-0.5" />
              <button
                type="button"
                className={cameraBtn + " mr-1"}
                onClick={() => handleButtonClick("rightMiddle")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["rightMiddle"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("rightMiddle", e)}
              />
              {images.rightMiddle && (
                <img
                  src={images.rightMiddle}
                  alt="Right Middle"
                  className="w-10 h-10 mr-1 rounded"
                />
              )}
            </div>
            {/* Right Bottom */}
            <div className="absolute bottom-[15px] right-0 flex items-center translate-x-full">
              <div className="w-6 h-0.5 bg-gray-400 mr-1" />
              <button
                type="button"
                className={cameraBtn + " mr-2"}
                onClick={() => handleButtonClick("rightBottom")}
              >
                <Icon icon="solar:camera-outline" width={16} height={16} />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputs.current["rightBottom"] = el)}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange("rightBottom", e)}
              />
              {images.rightBottom && (
                <img
                  src={images.rightBottom}
                  alt="Right Bottom"
                  className="w-10 h-10 mr-1 rounded"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* not a Modal */}
      <div className="w-full sm:w-[420px] px-1 py-1 absolute left-0 sm:left-[16px] top-[10px] rounded-lg flex justify-between items-center">
        <div className="text-blue-900 text-base sm:text-lg font-semibold font-['Open_Sans'] text-center flex-1 truncate">
          Take photos of your vehicle
        </div>
      </div>
    </div>
  );
};

export default UploadVehicleImagesFleet;
