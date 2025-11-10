import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartcontext";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaNairaSign } from "react-icons/fa6";
import "./Cart.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.info(`${name} removed from cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleClear = () => {
    clearCart();
    toast.error("Cart cleared ", {
      position: "top-left",
      autoClose: 2000,
    });
  };

  
  const handleCashOut = () => {
    if (cartItems.length === 0) return;

    toast.success(" Payment Successful! Thank you for your purchase.", {
      position: "top-right",
      autoClose: 2500,
    });

    setTimeout(() => {
      clearCart(); 
      navigate("/product");
    }, 2500);
  };

  const handleQuantityChange = (id, newQty, name) => {
    updateQuantity(id, newQty);
    toast.success(`Updated ${name} quantity to ${newQty}`, {
      position: "top-right",
      autoClose: 1500,
    });
  };


  const handleSubmit = () => {
    if (cartItems.length === 0 )
      return;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotal',JSON.stringify(total));
    navigate('/shippingDetails');
  }

  if (cartItems.length === 0)
    return (
      <div className="empty-cart">
        <h2> Your cart is empty</h2>
        <button onClick={() => navigate("/")} className="home-btn">
           Back Home
        </button>
        <ToastContainer />
      </div>
    );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Bag</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p><FaNairaSign style={{fontSize:"15px"}} />{item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.quantity > 1 ? item.quantity - 1 : 1,
                      item.name
                    )
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1, item.name)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button type="delete"
            className="remove-btn"
            onClick={() => handleRemove(item.id, item.name)}
          >
            <RiDeleteBin5Fill /> <p className="delete">Delete</p>
            
          </button>
          
        </div>
      ))}

      <div className="cart-footer">
        <h3>Total: <FaNairaSign  style={{fontSize:"15px"}}/>{total.toFixed(2)}</h3>

        <div className="cart-actions">
          <button onClick={handleClear} className="clear-btn">
            Clear Cart
          </button>
          <button onClick={handleSubmit} className="cashout-btn">
             Cash Out
          </button>
        </div>
      </div>

      <ToastContainer  />
    </div>
  );
};

export default Cart;

