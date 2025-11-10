import React from "react";

const MainBgPage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "200px",
        // pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#0099ff" stopOpacity="1"/>
          <stop offset="100%" stopColor="#f861ff" stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        fill="url(#bgGradient)"
        d="M0,160L120,144C240,128,480,96,720,106.7C960,117,1200,171,1320,197.3L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      />
    </svg>
  );
};

export default MainBgPage;