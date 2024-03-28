import React from "react";
import "./flipkartCard.scss";
import flipkartCard from "../../assets/images/flipkartCard.png";
import flipGiftCard from "../../assets/images/flipGiftCard.png";

export default function FlipkartCards() {
  return (
    <div className="linearBg">
      <div className="container">
        <div className="flipkart-cards">
          <div className="card1">
            <h2>
              Become a <span>Plus Member</span> Now & Enjoy amazing brnefits
            </h2>
            <p>Shop on Flipkart and pay using supercoins</p>
            <img src={flipkartCard} alt="" />
          </div>
          <div className="card2">
            <h2>Gift Card for Corporate and Business needs</h2>
            <p>
              Special occasions call for special gifts. Whether it's a birthday
              or an anniversary, finding the right gift for your loved ones is
              always a difficult task.
            </p>
            <img src={flipGiftCard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
