import React from "react";
import formatCurrency from "../utils/formatCurrency";

export default function Products(props) {
  const { productData, addToCart } = props;
  return (
    <div>
      <ul className="products">
        {productData.map((item) => {
          return (
            <>
              <li key={item.id}>
                <div className="product">
                  <div className="titles">
                    {" "}
                    <a href={"#" + item._id}>
                      <img src={item.image} alt={item.title}></img>
                      <p>{item.title}</p>
                    </a>
                  </div>
                  <div className="product-price">
                    <div>{formatCurrency(item.price)}</div>
                    <button
                      onClick={() => addToCart(item)}
                      className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
