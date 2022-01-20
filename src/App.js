import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import MainContext from "./contexts/mainContexts";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    console.log(item);
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <MainContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart}>
          <Navigation />

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
        {/* Routes */}

        <Route exact path="/">
          <Products />
        </Route>
      </MainContext.Provider>
    </div>
  );
}

export default App;
