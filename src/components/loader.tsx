import React from "react";
import { Html, useProgress } from "@react-three/drei";
import "./loader.css";
//import "./loader.gif"
import loaderGif from "../assets/loader.gif"; // Adjust the path as needed


// Custom GIF Loader component
const Loader = () => {
  const { progress } = useProgress(); // use drei progress
  
  return (
    <Html center>
      <div className="gif-loader-container">
        {/* Custom GIF placeholder */}
        <div className="gif-container">
          <img 
            src="loader.gif"
            alt="Loading animation" 
            className="loader-gif"
          />
        </div>
        
        {/* Progress bar */}
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Percentage text */}
        <div className="progress-percentage">
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
};

export default Loader;