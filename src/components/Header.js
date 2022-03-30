import React, { useContext } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  let context = useContext(FoodContext);
  console.log(context);

  return (
    <div className="head-wrapper">
      <div className="head-title">Italian Delicacies</div>
      <div className="head-cart">
        <Link to="cart">
          <ShoppingCartIcon />
        </Link>
        <span className="count"> {context.cartValue}</span>
      </div>
    </div>
  );
}

export default Header;
