import { useParams, useLocation, useNavigate } from "react-router-dom";
import carsStyle from "../../Dummy_product/carsStyle";
import { useState } from "react";
import { MdArrowBack } from 'react-icons/md';
import { IoMdArrowBack } from "react-icons/io";
import './CarsDetails.css'

function CarsDetails() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const product = location.state?.style || carsStyle.find((s) => String(s.id) === String(id));

    const images = Array.isArray(product?.imageUrl) ? product.imageUrl : [product?.imageUrl || 'https://via.placeholder.com/800x450?text=No+Image'];

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!product) {
        return (
            <div className="details-container not-found">
                <p>Product not found.</p>
            </div>
        );
    }
    return (
        <div className="details-container">
            <div className="product-card">
                <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
                    {/* <MdArrowBack style={{ fontSize: 18, marginRight: 6 }} /> Back */}
                </button>

                <div className="product-image">
                    {images.length > 1 && (
                        <button className="nav-btn prev" onClick={handlePrevImage} aria-label="Previous image">‹</button>
                    )}
                    <img src={images[currentImageIndex] || 'https://via.placeholder.com/800x450?text=No+Image'} alt={`${product.name} - View ${currentImageIndex + 1}`} />
                    {images.length > 1 && (
                        <button className="nav-btn next" onClick={handleNextImage} aria-label="Next image">›</button>
                    )}
                    {images.length > 1 && (
                        <div className="image-dots">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="product-info">
                    <h2 className="product-name"><button className="back-btn" onClick={() => navigate(-1)}><IoMdArrowBack /></button>{product.name}</h2>
                    <p className="product-price">${Number(product.price).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CarsDetails
