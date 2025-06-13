import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import importIcon from '../../../assets/images/Header/importIcon.png'
import personalInfo from '../../../assets/images/Header/personalInfo.png'
import securityIcon from '../../../assets/images/Header/securityIcon.png'
import helpIcon from '../../../assets/images/Header/helpIcon.png'
import { FiUser, FiSettings, FiLogOut, FiChevronDown, FiChevronUp } from "react-icons/fi";
import DropdownItem from './DropdownItem' 

const UserDropdown = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Toggle */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center font-semibold">
          {getInitials(user?.name)}
        </div>
        <div className=" flex-col hidden sm:flex">
          <span className="text-sm">{user?.name || ""}</span>
          <span className="text-xs text-blue-700">
            {user?.user_type || ""}
          </span>
        </div>
        {isOpen ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-[10px] shadow-lg z-50 overflow-hidden">
          {/* Profile Header */}
          <div className="px-5 py-5 bg-custom-blue rounded-tl-[10px] rounded-tr-[10px] ">
            <div className="text-white text-xl font-bold">{user?.name || "User Name"}</div>
            <div className="text-white text-sm"> {user?.user_type ? `${user.user_type} Account` : "Individual Account"}</div>
          </div>

          {/* Menu Items */}
          <DropdownItem 
            image={<img src={importIcon} className="text-blue-900" size={20} />}
            text="Import my Insurance"
            to="#"
            onClick={() => setIsOpen(false)}
          />

          <DropdownItem 
            image={<img src={personalInfo} className="text-blue-900" size={20} />}
            text="Personal Information"
            to="/personal_information"
            onClick={() => setIsOpen(false)}
          />

          <DropdownItem 
            image={<img src={securityIcon} className="text-blue-900" size={20} />}
            text="Security"
            to="#"
            onClick={() => setIsOpen(false)}
          />
          
          <DropdownItem 
            image={<img src={helpIcon} className="text-blue-900" size={20} />}
            text="Help & Support"
            to="#"
            onClick={() => setIsOpen(false)}
          />

          {/* Logout Button */}
          <div className="px-6 py-4">
            <button
              onClick={onLogout}
              className="w-full h-9 bg-custom-blue rounded-[10px] flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer"
            >
              <span className="text-white text-sm">Log out</span>
              <FiLogOut className="ml-2 text-white" size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get user initials
function getInitials(name) {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default UserDropdown;