import React from 'react'
import { useEffect } from 'react'
import "./Product.css"
import productStyle from "../../Dummy_product/productStyle"
import { Link, useNavigate } from 'react-router-dom'
import { FaNairaSign } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

function Product() {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);
    
    const navigate = useNavigate();
    const handleGoToDetails = () => {
        `/productDetails/${style.id}`
    }
    return (
        <div className="our-product" >
            <h2 className="product-tittle">our product</h2>
            <p className="product-description">Buy your product from us</p>

            <div className="product-style-container">
                {productStyle.map((style) =>(   
                    <Link to={(`/productDetails/${style.id}`)} key={style.id} className="product-card"  data-aos="flip-left">
                        <div className="productImage">
                            <img src={Array.isArray(style.imageUrl)? style.imageUrl[0] :style.imageUrl} alt={style.name} />
                        </div>
                        <div className="productDetails">
                            <h2 className="style-name"  data-aos="fade-up">{style.name}</h2>
                            <p className="style-description">{style.description.split(' ').slice(0, 4).join(' ')}...</p>
                            <div className="productPrice">
                                <span className="price" data-aos="flip-up"> <FaNairaSign style={{fontSize:"15px"}}/>{style.price.toFixed(2)}</span>
                            </div>
                        <button className="book-now"data-aos="fade-up" disabled={style.instock} onClick={handleGoToDetails} >View Detail</button>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Product
