import React from "react";
import { Card } from "../../utils/utilities";
import { StarRate } from "@mui/icons-material";
// import { Star, StarHalf, StarRate } from "@mui/icons-material";

export default function ItemsCard() {
  return (
    <div className="card py-10">
      <div className="container">
        <div className="multi-cards bg-white grid grid-cols-4 gap-5 justify-center items-center">
          {Card.map((item, index) => {
            return (
              <div
                className="text-white hover:shadow-2xl hover:shadow-black hover:transition hover:duration-300 transition duration-300 rounded-2xl shadow-md shadow-slate-400 card-wrapper p-6 bg-slate-200 "
                key={index}
              >
                <img
                  src={item.img}
                  alt=""
                  className="max-h-52 h-52 w-full rounded-xl bg-slate-200 object-contain"
                />
                <div className="card-content flex flex-col gap-2 p-2">
                  <p className="font-semibold text-left">{item.heading}</p>
                  <h4 className="text-lg font-semibold text-left">
                    <span className="text-left font-medium text-slate-700 pr-2">
                      <del>{item.del_price}</del>
                    </span>
                    {item.price}
                  </h4>
                  <span className="text-left">
                    {item.blueIcon.map((index) => {
                      return (
                        <span className="text-yellow-500">
                          <StarRate className="hover:text-white cursor-pointer hover:transition hover:ease-in-out hover:duration-300" />
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
