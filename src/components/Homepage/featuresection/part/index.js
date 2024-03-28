import React from "react";
import "./lastveiw.scss";
import kurti from "../../../../assets/images/kurti.png";
import shoes from "../../../../assets/images/shoes.png";
import earbud from "../../../../assets/images/earbud.png";
import chair from "../../../../assets/images/office_chair.png";
import bottle from "../../../../assets/images/bottle.png";
import FlipkartCards from "../../../../common/flipkartCards";

export default function LastVeiw() {
  let lastveiw = [
    {
      reveiw: "4.2",
      img: kurti,
      item: "Sponsered",
      name: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      finalprice: "₹599",
      mrp: "₹1,699",
      percent: "65%",
    },
    {
      reveiw: "4.2",
      img: shoes,
      item: "Sponsered",
      name: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      finalprice: "₹350",
      mrp: "₹499",
      percent: "35%",
    },
    {
      reveiw: "4.2",
      img: earbud,
      item: "Sponsered",
      name: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      finalprice: "₹1799",
      mrp: "₹3999",
      percent: "55%",
    },
    {
      reveiw: "4.2",
      img: chair,
      item: "Sponsered",
      name: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      finalprice: "₹6367",
      mrp: "₹12000",
      percent: "46%",
    },
    {
      reveiw: "4.2",
      img: bottle,
      item: "Sponsered",
      name: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      finalprice: "499",
      mrp: "₹1099",
      percent: "54%",
    },
  ];

  return (
    <div className="sectionOne">
      <div className="container">
        <div className="lastVeiw">
          <h3>Last veiw Products</h3>
          <div className="items_veiw">
            {lastveiw.map((item) => {
              return (
                <div className="veiw">
                  <div className="rating">
                    <p>{item.reveiw}</p>
                  </div>
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.item}</p>
                  <h4>{item.name}</h4>
                  <h2>{item.finalprice}</h2>
                  <span>
                    <del>{item.mrp}</del> <p>{item.percent} off</p>
                  </span>
                </div>
              );
            })}
            <div className="more">
              <a href="/item">Veiw More</a>
            </div>
          </div>
        </div>
      </div>
      <FlipkartCards />
    </div>
  );
}
