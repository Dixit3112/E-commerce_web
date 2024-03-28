import React from "react";
import "./feature.scss";
import dslr from "../../../assets/images/dslr_camera.png";
import cooker from "../../../assets/images/cooker.png";
import headphone from "../../../assets/images/headphone.png";
import bed from "../../../assets/images/bed.png";
import machine from "../../../assets/images/washing_machine.png";
import LastVeiw from "./part";

export default function Features() {
  return (
    <>
      <div className="container">
        <div className="features">
          <h2>Feature Product</h2>
          <div className="products">
            <div className="furniture">
              <h3>FURNITURE</h3>
              <p>
                Create your own space with <span>Flipkart </span> Furniture
              </p>
              <div className="priceBot">
                <h3>From ₹1,200</h3>
              </div>
            </div>
            <div className="accesories1">
              <div className="item1">
                <div className="text">
                  <div className="rightBtn">₹23,000</div>
                </div>
                <img src={dslr} alt="dslr camera" />
                <h6>NIKON DSLR Camera </h6>
              </div>
              <div className="item-yelo">
                <div className="text">
                  <div className="rightBtn">₹2,900</div>
                </div>
                <img src={cooker} alt="dslr camera" />
                <h6>Cooker Aluminium</h6>
              </div>
            </div>
            <div className="accesories2">
              <div className="restItems">
                <div className="rest1">
                  <div className="text">
                    <div className="rightBtn">₹1,200</div>
                  </div>
                  <img src={headphone} alt="dslr camera" />
                  <h6>Cooker Aluminium</h6>
                </div>
                <div className="rest2">
                  <div className="text">
                    <div className="rightBtn">₹2,500</div>
                  </div>
                  <img src={bed} alt="dslr camera" />
                  <h6>Mj Furniture Bed with 4 Drawer </h6>
                </div>
              </div>
              <div className="homeAppliance">
                <div className="washMachine">
                  <div className="infoMach">
                    <h5>Samsung Washing Machine</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adiposcing
                      elit.Vel eros, Sollicitudin a nulla.
                    </p>
                  </div>
                  <div className="btn">
                    <button className="gray">₹60,000</button>
                  </div>
                </div>
                <img src={machine} alt="dslr camera" />
              </div>
            </div>
          </div>
        </div>
        <LastVeiw />
      </div>
    </>
  );
}
