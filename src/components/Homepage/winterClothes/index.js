import React from "react";
import "./winterClothes.scss";
import menJacket from "../../../assets/images/winterJacket.png";
import cottonHat from "../../../assets/images/winterHat.png";
import formalShoes from "../../../assets/images/formalShoes.png";
import roomHeat from "../../../assets/images/roomHeater.png";
import blanket from "../../../assets/images/blankate.png";
import { Forward } from "@mui/icons-material";

export default function WinterClothes() {
  let clothes = [
    {
      reveiw: "4.2",
      img: menJacket,
      type: "Roadster",
      name: "Men Striped Padded Jacket",
      price: "₹891",
      mrp: "₹3,999",
      percent: "72%",
    },
    {
      img: cottonHat,
      reveiw: "3.2",
      type: "PinKit",
      name: "Solid Beanie  (Pack of 2)",
      price: "₹265",
      mrp: "₹4999",
      percent: "46%",
    },
    {
      img: formalShoes,
      reveiw: "4.2",
      type: "BIG FOX ",
      name: "Big Fox Anglo-2 Chelsea Boots For Men (Maroon)",
      price: "₹800",
      mrp: "₹2,245",
      percent: "65%",
    },
    {
      img: roomHeat,
      reveiw: "4.1",
      type: "Heater",
      name: "HILTON ?HQ-1-800 | ISI Certified | Multi Mode | Grey Quartz Room Heater",
      price: "₹1,200",
      mrp: "₹1,899",
      percent: "36%",
    },
    {
      img: blanket,
      reveiw: "4.9",
      type: "kamble",
      name: "MAGICAL Floral Double Mink Blanket for Heavy Winter (Microfiber, Brown)",
      price: "₹479",
      mrp: "₹1,999",
      percent: "76%",
    },
  ];
  return (
    <div className="winterClothes">
      <div className="container">
        <h2>Winter Essentials</h2>
        <div className="clothesCard">
          {clothes.map((item) => {
            return (
              <div className="veiw">
                <div className="rating">
                  <p>{item.reveiw}</p>
                </div>
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <p className="itemName">{item.name}</p>
                <div className="info-Item">
                  <h4>{item.price}</h4>
                  <span>
                    <del>{item.mrp}</del>
                    <p>{item.percent} off</p>
                  </span>
                </div>
              </div>
            );
          })}
          <div className="more">
            <a href="/item">
              Veiw More
              <Forward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
