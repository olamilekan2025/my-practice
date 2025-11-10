import React, { useEffect, useState } from "react";
import "./ShippingDetails.css";

function ShippingDetails() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone1: "",
    phone2: "",
    address: "",
  });

  // ✅ Load cart data from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const savedTotal = parseFloat(localStorage.getItem("cartTotal")) || 0;
    setCartItems(savedItems);
    setCartTotal(savedTotal);
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle checkout
  const handleCheckout = (e) => {
    e.preventDefault();

    const orderDetails = {
      customer: formData,
      cartItems,
      totalAmount: cartTotal,
      orderDate: new Date().toISOString(),
    };

    console.log("Order Details:", orderDetails);
    alert("Order placed successfully!");

    // Clear localStorage and state
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotal");

    setFormData({
      fullname: "",
      email: "",
      phone1: "",
      phone2: "",
      address: "",
    });
    setCartItems([]); // ✅ Fixed from {}
    setCartTotal(0);
  };

  return (
    <>
      <div className="shipping">
         <h2 className="shippingDetails">Shipping Details</h2>
        <div className="shipping-details">
         

          {cartItems.length > 0 ? (
            <div className="cart-summary">
              <h3>Cart Summary</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-image"
                  />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>
                      ₦ {item.price.toFixed(2)} × {item.quantity}
                    </p>
                    <strong>₦ {(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h4>Total: ₦ {cartTotal.toFixed(2)}</h4>
              </div>
            </div>
          ) : (
            <p>No items found in your cart.</p>
          )}

          <form className="shipping-form" onSubmit={handleCheckout}>
            <label>
              Full Name:
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone 1:
              <input
                type="tel"
                name="phone1"
                value={formData.phone1}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone 2:
              <input
                type="tel"
                name="phone2"
                value={formData.phone2}
                onChange={handleChange}
              />
            </label>

            <label>
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>

            <div className="send-btn">
              <button type="submit" className="checkout-btn">
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ShippingDetails;
