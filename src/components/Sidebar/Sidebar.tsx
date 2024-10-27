import homeicon from "../../assets/home-icon.svg";
import calendaricon from "../../assets/calendar-icon.svg";
import tasksicon from "../../assets/tasks-icon.svg";
import notesicon from "../../assets/notes-icon.svg";
import ellipseicon from "../../assets/ellipse-icon.svg";
import profileImage from "../../assets/profile-image.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="sidebar-icon-item active">
          <img src={homeicon} alt="Home Icon" />
          <p className="sidebar-menu-title">Home</p>
        </div>
        <div className="sidebar-icon-item">
          <img src={calendaricon} alt="calendar Icon" />
          <p className="sidebar-menu-title">Calendar</p>
        </div>
        <div className="sidebar-icon-item">
          <img src={tasksicon} alt="Tasks Icon" />
          <p className="sidebar-menu-title">Tasks</p>
        </div>
        <div className="sidebar-icon-item">
          <img src={notesicon} alt="Notes Icon" />
          <p className="sidebar-menu-title">Notes</p>
        </div>
      </div>
      <div className="sidebar-divider" />
      <div className="sidebar-pro-info">
        <div className="sidebar-pro-info-message">
          <img
            src={ellipseicon}
            alt="Ellipse Icon"
            className="sidebar-pro-info-ellipse"
          />
          <h3>Upgrade to PRO</h3>
          <p>to get access to all features! Connect with Protrack World!</p>
        </div>
      </div>
      <div className="sidebar-footer">
      <div className="profile-card">
        <div className="profile-card-content">
            <img src={profileImage} alt="Profile" className="profile-card-image" />
            <div className="profile-card-info">
                <h4>Dalton Smith</h4>
                <p>Free Account</p>
            </div>
        </div>
            <img src={settingsIcon} alt="Settings" className="profile-card-settings" />
        </div></div>
    </div>
  );
}

export default Sidebar;
