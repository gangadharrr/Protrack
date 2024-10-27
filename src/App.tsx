import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./pages/HomeScreen";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="header">
      <Header/>
      </div>
      <div className="sidebar">
      <Sidebar/>     </div>
      <div className="main-content">
      <HomeScreen/>
      </div>
    </div>
  );
};

export default App;
