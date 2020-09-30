import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import HomePage from "./components/HomePage.jsx";
import { Route, Link } from "react-router-dom";

function App() {
  const [productData, setProductData] = useState({
    products: data.products,
    cartItems: [],
    size: "",
    sort: "",
  });
  const addToCart = (product) => {
    const newObject = {
      _id: Date.now(),
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    };
    setProductData([...productData.cartItems, newObject]);
  };
  return (
    <div className="grid-container">
      <header>
        <p>Lyn Techi's Merch</p>
        <Link to="/home"><p>Home</p></Link>
      </header>

      <Route exact path="/home">
        <HomePage />
      </Route>

      <Route exact path="/shoppingpage">
        <main>
          <div className="content">
            <div className="main">
              <Products
                productData={productData.products}
                addToCart={addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart cartItems={productData.cartItems} />
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </Route>
    </div>
  );
}

export default App;
