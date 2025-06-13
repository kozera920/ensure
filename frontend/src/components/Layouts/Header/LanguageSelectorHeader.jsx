import React from "react";
import usflag from "../../../assets/images/usflag.png";
import rwflag1 from "../../../assets/images/rwflag1.png";
import { Icon } from "@iconify/react";

const LanguageSelectorHeader = ({ language, setLanguage }) => {
  const flag = language === "en" ? usflag : rwflag1;

  return (
    <div className="flex items-center gap-1">
      {/* <img src={flag} alt="Flag" className="w-5 h-5" /> */}
      <select
        className="bg-transparent text-sm outline-none cursor-pointer pl-1 pr-2 sm:hidden"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en" title="English">
          <span className="sm:hidden">🇺🇸</span> 
        </option>
        <option value="rw" title="Kinyarwanda">
          <span className="sm:hidden">🇷🇼</span> 
        </option>
      </select>

      <select
        className="bg-transparent text-sm outline-none cursor-pointer pl-1 pr-2 hidden sm:inline"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en" title="English"> 
          <span className="hidden sm:inline">🇺🇸 English</span>
        </option>
        <option value="rw" title="Kinyarwanda"> 
          <span className="hidden sm:inline">🇷🇼 Kinyarwanda</span>
        </option>
      </select>
    </div>
  );
};

export default LanguageSelectorHeader;