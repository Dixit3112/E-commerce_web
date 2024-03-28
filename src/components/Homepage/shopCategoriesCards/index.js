import React from "react";
import "./shopCate.scss";
import fashion from "../../../assets/images/ladyFashion.png";
import beautyItem from "../../../assets/images/beautyItems.png";
import electric from "../../../assets/images/eletronics.png";
import groceries from "../../../assets/images/foodItems.png";

export default function ShopCategories() {
  const cards = [
    {
      name: "Fashion",
      img: fashion,
    },
    {
      name: "Beauty & Accesories",
      img: beautyItem,
    },
    {
      name: "Electric",
      img: electric,
    },
    {
      name: "Grocery",
      img: groceries,
    },
  ];

  return (
    <div className="shop-categories">
      <div className="container">
        <div className="cates">
          <h2>Shop Categories</h2>
          <div className="categories">
            {cards.map((item) => {
              return (
                <div className="card">
                  <h3>{item.name}</h3>
                  <img src={item.img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
