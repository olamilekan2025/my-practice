import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import productStyle from "../../Dummy_product/productStyle";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useCart } from "../../context/cartcontext";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const { addToCart } = useCart();
  const product =
    location.state?.style ||
    productStyle.find((s) => String(s.id) === String(id));

  const handleSelectImage = (index) => {
    setSelectedImg(index);
  };

  const handleSubmit = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/shippingDetails");
  };

  if (!product) {
    return (
      <div className="details-container-not-found">
        <p>Product not found.</p>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="productDetailsContainer">
      <div className="product-card">
        {/* Product Image Section */}
        <div className="switch-options">
          <img src={product.imageUrl[selectedImg]} alt={product.name} />
          <div className="options">
            {product.imageUrl.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name}-${index}`}
                onClick={() => handleSelectImage(index)}
                className={selectedImg === index ? "active" : ""}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="product-infos">
          <h2 className="product-names">
            <button type="button" className="back-btns" onClick={() => navigate("/product")}>
              <FaArrowLeft />  Go to product
            </button>
            {product.name}
          </h2>

          <p className="product-price">₦{product.price.toFixed(2)}</p>





         
          <div className="cart-actions">
            <button
              className="add-to-cart-btn"
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  imageUrl: Array.isArray(product.imageUrl)
                    ? product.imageUrl[0]
                    : product.imageUrl,
                })
              }
            >
              Add to Cart
            </button>

            <button className="orderNow" onClick={handleSubmit}>
              Order Now
            </button>
          </div>





          
          <div className="description-section">
            <button
              className="description-toggle"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              Description{" "}
              {isDescriptionOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isDescriptionOpen && (
              <p className="product-description">{product.description}</p>
            )}
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;






