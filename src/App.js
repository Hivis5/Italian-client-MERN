import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Food from "./components/Food";
import Cart from "./components/Cart";
import Header from "./components/Header";
const url = "https://italian-food.herokuapp.com/users/all";
export const FoodContext = React.createContext();
function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${url}/food`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <>
      <Router>
        <FoodContext.Provider
          value={{ data, cart, setCart, cartValue, setCartValue, url }}
        >
          <Header />
          <Routes>
            <Route path="/all" element={<Food />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </FoodContext.Provider>
      </Router>
    </>
  );
}

export default App;
