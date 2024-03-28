import React from "react";
import "./last.scss";
import grocery from "../../../assets/images/Grains.png";

export default function LastSection() {
  return (
    <div className="last-section">
      <div className="container">
        <div className="groceryInfo">
          <div className="info">
            <h2>
              <span>Flipkart Grocery:</span> Your New Go-to Online Grocery Store
            </h2>
            <p>
              Whether you work from home or office or other workplaces, daily
              items are a requsite foe everybody
            </p>
            <div className="btn">
              <button className="white fontBold">UP TO 30% OFF</button>
            </div>
          </div>
          <div className="img">
            <img src={grocery} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
