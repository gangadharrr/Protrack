import React from "react";
import "./HomeScreen.css";

const HomeScreen: React.FC = () => {
  return (
    <div className="main-content-layout">
      <div className="component component-1">
        <h2>Component 1</h2>
      </div>
      <div className="component component-2">
        <h2>Component 2</h2>
      </div>
      <div className="component component-3">
        <h2>Component 3</h2>
      </div>
      <div className="component component-4">
        <h2>Component 4</h2>
      </div>
    </div>
  );
};

export default HomeScreen;
