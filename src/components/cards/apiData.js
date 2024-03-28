import React, { useEffect, useState } from "react";

export default function ApiData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex gap-5 p-5 flex-wrap">
          {products.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col mx-auto justify-between p-3 items-center w-[300px] bg-slate-200 rounded-xl hover:shadow-xl hover:shadow-black hover:transition transition duration-500 hover:duration-500"
              >
                <div className="imgs flex">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-36 h-40 mt-1 my-1 "
                  />
                  {/* {item.images.map((img, index) => {
                <div className="img-pics" key={index}>
                  <img src={img.images[0]} alt="Image_of_this_Product" />
                  <img src={img.images[1]} alt="Image_of_this_Product" />
                  <img src={img.images[2]} alt="Image_of_this_Product" />
                </div>;
              })} */}
                </div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.discription}</p>
                <span className="text-xl font-bold">
                  ${item.price}
                  <span className="text-sm text-slate-600">
                    (-{item.discountPercentage}%)
                  </span>
                </span>
                <p className="text-sm font-semibold">
                  rating is {item.rating}/5
                </p>
                <p>
                  Brand :{item.brand}, <span>{item.category}</span>
                </p>
                <p>available stock is {item.stock}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
