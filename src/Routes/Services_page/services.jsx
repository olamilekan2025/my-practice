import { useState } from "react";
import "./Services.css";

function Services() {
  const [makeup, setMakeup] = useState(true);
  const [dressing, setDressing] = useState(false);
  const [massage, setMassage] = useState(false);

  const handleMakeup = () => {
    setMakeup(true);
    setDressing(false);
    setMassage(false);
  };

  const handleDressing = () => {
    setMakeup(false);
    setDressing(true);
    setMassage(false);
  };

  const handleMassage = () => {
    setMakeup(false);
    setDressing(false);
    setMassage(true);
  };

  return (
    <>
      {
        <div className="services">
          <h2>OUR SERVICES</h2>
          <p>Welcome to our services</p>

          <div className="services_card">
            <div className="switch">
              <button
                type="button"
                className={makeup ? "tab active" : "tab"}
                onClick={handleMakeup}
                aria-pressed={makeup}
              >
                Makeup
              </button>
              <button
                type="button"
                className={dressing ? "tab active" : "tab"}
                onClick={handleDressing}
                aria-pressed={dressing}
              >
                Dressing
              </button>
              <button
                type="button"
                className={massage ? "tab active" : "tab"}
                onClick={handleMassage}
                aria-pressed={massage}
              >
                Massage
              </button>
            </div>

            <div className="panel">
              {makeup && (
                <div className="service-content">
                  <h2>Makeup Services</h2>
                  <div className="makeupImage"></div>
                </div>
              )}
              {dressing && (
                <div className="service-content">
                  <h2>Dressing Services</h2>
                  <div className="dressingImage"></div>
                </div>
              )}
              {massage && (
                <div className="service-content">
                  <h2>Massage Services</h2>
                  <div className="massageImage"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Services;
