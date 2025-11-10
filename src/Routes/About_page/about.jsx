import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";
import CountUpStats from '../utils/count-up';
import TypeWriter from "../utils/TypeWriter";

function About() {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <>
    <div className="about">
      <TypeWriter />
    <CountUpStats />
      <h2 data-aos="fade-up">About Plans</h2>
      <p data-aos="fade-down">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        laudantium.
      </p>
      <div className="aboutPlans" data-aos="flip-left">
        <div className=" card" data-aos="fade-up" data-aos-delay="0">
          <h3>Basic Plan</h3>
          <p className="price">
            $9.99 <span>/ month</span>
          </p>
          <ul>
            <li data-aos="fade-up">Feature 1</li>
            <li data-aos="flip-up">Feature 2</li>
            <li data-aos="fade-down">Feature 3</li>
          </ul>
          <button className="select-btn" data-aos="fade-up">
            Choose Plan
          </button>
        </div>
        <div className="card premium" data-aos="zoom-in" data-aos-delay="150">
          <h3>Premium Plan</h3>
          <p className="price">
            $19.99 <span>/ month</span>
          </p>
          <ul>
            <li data-aos="fade-up">Feature 1</li>
            <li data-aos="fade-down">Feature 2</li>
            <li data-aos="fade-up">Feature 3</li>
            <li data-aos="fade-down">Feature 4</li>
          </ul>
          <button className="select-btn" data-aos="flip-right">
            Choose Plan
          </button>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <h3>Enterprise Plan</h3>
          <p className="price">
            $49.99 <span>/ month</span>
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="select-btn" data-aos="fade-down">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
