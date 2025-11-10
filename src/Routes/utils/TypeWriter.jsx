import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  const aboutContainerStyle = {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "skyblue",
  };

  const typewriterContainerStyle = {
    color: "#fff",
    fontWeight: "300",
    fontSize: "3.5rem",
    margin: "15px 0",
    textAlign: "center",
    padding: "20px",
    textShadow: "2px 4px #000",
  };

  return (
    <div className="about-container" style={aboutContainerStyle}>
      <div className="typewriter-container" style={typewriterContainerStyle}>
        <Typewriter
          options={{
            strings: ["WELCOME TO OLA FROSH WEB DESIGNS"],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>
    </div>
  );
};

export default TypeWriter;
