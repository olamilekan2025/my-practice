import React from "react";
import Typewriter from "typewriter-effect";
import "./TypeWriter.css";

const TypeWriter = () => {
  return (
    <div className="type-writer-section">
      <div className="typewriter-container">
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
