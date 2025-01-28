import React from "react";

const HeroSection = () => {
  return (
    <div className="flex-row">
      <div className="apple-computers" />
      <div className="frame">
        <div className="innovating-for-better-lives">
          <span className="innovating">Innovating</span>
          <span className="for-better-lives"> for Better Lives</span>
        </div>
        <div className="frame-1">
          <span className="empowering-productivity">
            Empowering Productivity | Fostering Creativity | Enhancing Safety
          </span>
          <div className="div-2">
            <div className="button-3">
              <a href="#contact-us" className="lets-start">
                Let’s start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
