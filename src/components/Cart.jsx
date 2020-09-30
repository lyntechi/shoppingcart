import React from "react";

export default function Cart(props) {
  const { cartItems } = props;
  const total = cartItems.reduce(
    (total, currentValue) => total + currentValue.price,
    0
  );
  return (
    
    
     <div className="checkout-section">
        
     <form id="creditCardBox">
     <p>Total Items in Cart: {cartItems.length}</p>
       <p className="total">Total: ${total}</p>
       <h3>Credit Card Detail</h3>
       <input type="text" placeholder="Full Name" />
       <br />
       <input type="text" placeholder="Email Address" />
       <br />
       <input type="text" placeholder="Mailing Address" />
       <br />

       <input type="text" placeholder="Billing Address" />
       <br />
       <input type="password" placeholder="Credit Card #" />
       <br />
       <h4>Credit Card Expiration Date</h4>
       <input type="month" />
       <br />
       <input type="text" placeholder="CVV" />
       <button className="checkout">
         Checkout
       </button>
     </form>
   </div>
  );
}
