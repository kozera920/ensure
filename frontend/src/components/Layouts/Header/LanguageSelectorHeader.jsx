import React from "react";
import usflag from "../../../assets/images/usflag.png";
import rwflag1 from "../../../assets/images/rwflag1.png";

const LanguageSelectorHeader = ({ language, setLanguage }) => {
  const flag = language === "en" ? usflag : rwflag1;

  return (
    <div className="flex items-center gap-1">
      <img src={flag} alt="Flag" className="w-5 h-5" />
      <select
        className="bg-transparent text-sm outline-none cursor-pointer pl-1 pr-2"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="rw">Kinyarwanda</option>
      </select>
    </div>
  );
};

export default LanguageSelectorHeader;