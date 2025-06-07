import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import axiosClient from "../../axios-client.js";
import SearchBar from "./Header/SearchBar.jsx";
import LanguageSelector from "./Header/LanguageSelectorHeader.jsx";
import NotificationIcon from "./Header/NotificationIcon.jsx";
import UserDropdown from "./Header/UserDropdown.jsx";

const Header = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const [language, setLanguage] = useState("en");

  const onLogout = (event) => {
    event.preventDefault();
    axiosClient
      .post("/logout")
      .then(() => {
        setUser({});
        setToken(null);
        localStorage.removeItem("ACCESS_TOKEN");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };

  useEffect(() => {
    axiosClient
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.error(":", err);
      });
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <header className="p-5">
      <div className="bg-white shadow rounded-md flex items-center p-5">
        <SearchBar />
        
        <div className="flex items-center space-x-8 ml-auto">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <NotificationIcon />
          <UserDropdown user={user} onLogout={onLogout} />
        </div>
      </div>
    </header>
  );
};

export default Header;