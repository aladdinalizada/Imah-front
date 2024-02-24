import React from "react";
import "./partners.css";
import Casa from "/assets/pages/partners/casa.png";
import Fimela from "/assets/pages/partners/fimela.png";
import Pnn from "/assets/pages/partners/pnn.png";
const Partners = () => {
  return (
    <div className="partnersContainer">
      <div className="partnersTitle">
        <h2>Trusted by 75+ Partners</h2>
      </div>
      <div className="partnersLogo">
        <div className="partnersImg">
          <img src={Casa} alt="Casa" />
        </div>
        <div className="partnersImg">
          <img src={Fimela} alt="Fimela" />
        </div>
        <div className="partnersImg">
          <img src={Pnn} alt="Pnn" />
        </div>
        <div className="partnersImg">
          <img src={Casa} alt="Casa" />
        </div>
        <div className="partnersImg">
          <img src={Fimela} alt="Fimela" />
        </div>
        <div className="partnersImg">
          <img src={Pnn} alt="Pnn" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
