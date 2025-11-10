import React from "react";
import { useCart } from "../../context/cartcontext";

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "MacBook Pro", price: 1500 },
    { id: 2, name: "Wireless Mouse", price: 50 },
    { id: 3, name: "Headphones", price: 120 },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛍️ Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            margin: "10px 0",
          }}
        >
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: "skyblue",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
