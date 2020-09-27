import React, { useState } from "react";
import data from "./data.json";
import Products from './components/Products.jsx'
function App() {
  const [productData, setProductData] = useState({
    products: data.products,
    size: "",
    sort: "",
  });
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main"><Products productData={productData.products}/></div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
