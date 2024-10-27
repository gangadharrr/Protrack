import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/search-icon.svg";
import profilepic from "../../assets/profile-picture.svg";
import notificationbell from "../../assets/notification-bell.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <span className="header-title">Protrack</span>
        <div className="header-search-container">
          <img
            src={searchicon}
            alt="Search Icon"
            className="header-search-icon"
          />
          <input type="text" placeholder="Search" className="header-search" />
        </div>
      </div>

      <div className="header-right">
        <button className="header-add-task" title="Add tasks"> 
          <span>+</span>
          <p>ADD TASKS</p>
        </button>
        <img src={notificationbell} alt="Notification bell" className="header-notification-bell" />
        <img src={profilepic} alt="Profile pic" className="header-profile-pic" />
      </div>
    </header>
  );
};

export default Header;
