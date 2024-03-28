import React from "react";
import "./bot-header.scss";
import star from "../../../assets/icons/ei_star.svg";
import grocery from "../../../assets/icons/food.svg";
import mobiles from "../../../assets/icons/mobile-phone.svg";
import home from "../../../assets/icons/sofa.svg";
import electric from "../../../assets/icons/responsive.svg";
import fashion from "../../../assets/icons/shoe.svg";
import beauty from "../../../assets/icons/makeup.svg";

export default function BotHeader() {

  const headerItems = [
    {
      id: 1,
      icon: star,
      title: "Top Offers",
    },
    {
      id: 2,
      icon: grocery,
      title: "Grocery",
    },
    {
      id: 3,
      icon: mobiles,
      title: "Mobiles",
    },
    {
      id: 4,
      icon: home,
      title: "Home",
    },
    {
      id: 5,
      icon: electric,
      title: "Electronics",
    },
    {
      id: 6,
      icon: fashion,
      title: "Fashion",
    },
    {
      id: 7,
      icon: beauty,
      title: "Beaty & Accesories",
    },
  ];
  return (
    <div className="main">
      <div className="container">
        <div className="headerItems">
          {headerItems.map((item, index) => {
            return (
              <div className="items">
                <img src={item.icon} alt="" />
                <a href={`/{item.title}`}>{item.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
