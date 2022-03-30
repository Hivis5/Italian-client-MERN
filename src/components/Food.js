import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FoodContext } from "../App";

function Food() {
  let context = useContext(FoodContext);
  console.log(context);
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();
  let getData = () => {
    if (context.data.length > 0)
      setProducts(context.data[0].subItemsData.subItems);
    else navigate("/");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="product-wrapper">
      <h2>The Taste of Italy</h2>
      {products.map((e, i) => {
        return (
          <div className="product-item-wrapper">
            <div className="product-details">
              <h4>{e.Name}</h4>
              <div className="product-price">&#x20B9;{e.Price}</div>
              <div className="product-description">{e.Description}</div>
              <button
                className="product-btn"
                onClick={() => {
                  context.cart.push(e);
                  context.setCartValue(context.cart.length);
                }}
              >
                Order Now
              </button>
            </div>
            <div className="product-image">
              <img src={e.Image} alt={e.Name}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Food;
