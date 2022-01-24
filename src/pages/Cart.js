import React from "react";
import {Link} from 'react-router-dom'
const Cart = ({
  cart,
  handleAddCard,
  handleRemoveCard,
  handleCardClearance,
  removProduct,
}) => {
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-items-header">
          <h1>List Of Products</h1>
        </div>
        <div className="underline"></div>
        <div className="card-clear">
          {cart.length >= 1 && <button onClick={handleCardClearance}>X</button>}
        </div>
        {cart.length === 0 && (
          <div className="cart-empty">
            <h2>There is no Product in the cart</h2>
          </div>
        )}
        <div className="cart-order">
          {cart.map((item) => (
            <div key={item.id} className="cart-details">
              <div className="cart-order-image">
                <img src={item.image} alt="" />
              </div>
              <div className="cart-info-details">
                <div className="cart-order-details">
                  <h2>{item.title}</h2>
                  <h4>${item.price}</h4>
                </div>
                <div className="cart-decs">
                  <p>{item.desc}</p>
                </div>
                <div className="cart-order-function">
                  <button onClick={() => handleAddCard(item)} className="count">+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleRemoveCard(item)} className="count">-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length === 0 ? '' : <div className="cart-payments"> <div className="payment-incart">
              <Link to='/payment'><button>payment</button></Link>
            </div>
            <div className="cart-total">
        Total Price : ${totalPrice}
       </div>
       </div>}
      </div>
          


            

          
    </div>
  );
};

export default Cart;
