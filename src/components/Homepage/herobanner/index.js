import React from "react";
import "./hero.scss";
import { button } from "../../../utils/utilities";
import iphone from "../../../assets/images/iphone14.png";
import TV from "../../../assets/images/television.png";
import bicycle from "../../../assets/images/bicycle.png";

export default function flipkartHero() {
  const product = [
    {
      itemName: "iphone 14",
      availability: "Now Available on affordable price",
    },
  ];
  const card = [
    {
      itemName: "Ultra HD 4K TVs",
      start: "From ",
      price: "₹5000*",
      info: "Sony, Samsung, LG and more. Instant 10% Offer on CitiBank",
    },
  ];
  const cycle = [
    {
      itemName: "Lifelong Tribe 20T",
      availability:
        "Matte Black And  Fluorescent yellow 20 T Road Cycle (Single Speed, Black",
    },
  ];
  let price = [100000, 5000];
  return (
    <div className="Hero">
      <div className="container item-flex">
        <div className="left2Electric">
          <div className="mobile">
            <div className="infoPhone">
              <span className="discount">50% Discount</span>
              {product.map((item, index) => {
                return (
                  <div className="offerIphone">
                    <h2>{item.itemName}</h2>
                    <p>{item.availability}</p>
                    <div className="priceBtn">
                      <div className="priceDiv">
                        <p>
                          ₹<del>{price[0]}</del> From
                        </p>
                        <h6>₹{price[0] - 500}*</h6>
                      </div>
                      <div className="btn">
                        <button className="blue">{button}</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <img src={iphone} alt="iphoine 14" />
          </div>
          <div className="television">
            {card.map((item, index) => {
              return (
                <div className="offerTV">
                  <h2>{item.itemName}</h2>
                  <span className="bolyFont">
                    {item.start}
                    <span>{item.price}</span>
                  </span>
                  <p>{item.info}</p>
                </div>
              );
            })}
            <div className="TVimg">
              <div className="img">
                <img src={TV} alt="4K TV" />
              </div>
            </div>
          </div>
        </div>
        <div className="rightCycle">
          {cycle.map((item) => {
            return (
              <div className="cycleOffer">
                <h2>{item.itemName}</h2>
                <p>{item.availability}</p>
                <div className="priceBtn">
                  <div className="priceDiv">
                    <p>
                      ₹<del>{price[1]}</del> From
                    </p>
                    <h6>₹{price[1] - 3000}*</h6>
                  </div>
                  <div className="btn">
                    <button className="red">{button}</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cycImg">
            <img src={bicycle} alt="cycle" />
          </div>
        </div>
      </div>
    </div>
  );
}
