import React from "react";
import "./recommand.scss";
import apple from "../../../assets/images/ipad.png";
import teaPot from "../../../assets/images/TeaPot.png";
import printer from "../../../assets/images/printer.png";
import watch from "../../../assets/images/watch.png";
import guitar from "../../../assets/images/guitar.png";
import { Forward } from "@mui/icons-material";

export default function FlipkartRecommendation() {
  let wholeItem = [
    {
      reveiw: "4.2",
      img: guitar,
      type: "GUITAR",
      name: "STREE MANTRA Women  Printed Georgette, Crepe  A-line Kurta Grey",
      price: "₹920",
      mrp: "₹1,897",
      percent: "51% off",
    },
    {
      img: watch,
      reveiw: "3.2",
      type: "LIMESTONE",
      name: "Bleed Blue Day and Date Functioning Strap Adult Quartz Analog Watch - For Men LS2821",
      price: "₹280",
      mrp: "₹1,999",
      percent: "85% off",
    },
    {
      img: printer,
      reveiw: "4.2",
      type: "Canon ",
      name: "Canon PIXMA E3370 Multi-function WiFi Color Inkjet Printer (Borderless Printing) (Black, Ink Cartridge)",
      price: "₹5,599",
      mrp: "₹6,996",
      percent: "65% off",
    },
    {
      img: teaPot,
      reveiw: "4.1",
      type: "Prestige",
      name: "Prestige PKOSS Electric Kettle (1.5 L, Silver)",
      price: "₹699",
      mrp: "₹1,245",
      percent: "36% off",
    },
    {
      img: apple,
      reveiw: "4.9",
      type: "Apple",
      name: "Apple iPad (10th Gen) 64 GB, ROM 10.9 inch with Wi-Fi Only (Silver)",
      price: "₹37,499",
      mrp: "₹39,900",
      percent: "76% off",
    },
  ];

  const handleCLick = () => {
    window.location.href = "www.flipkart.com";
  };
  return (
    <div className="flipkartRecommendation">
      <div className="container">
        <h2>Flipkart Recommendation</h2>
        <div className="flipRecommanded">
          {wholeItem.map((item) => {
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
                    <del>{item.mrp}</del> <p>{item.percent}</p>
                  </span>
                </div>
              </div>
            );
          })}
          <div className="more">
            <a
              href="/item"
              onClick={() => {
                handleCLick();
              }}
            >
              Veiw More
            <Forward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
