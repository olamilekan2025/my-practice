import carsStyle from "../../Dummy_product/carsStyle"
import './Gallery.css'
import { Link } from "react-router-dom"

function Gallery() {
    return (
        <div className="our-cars">
            <h2 className="car-tittle">Our Cars</h2>
            <p className="car-description">Choose your favourite car</p>

            <div className="car-style-container">
                {carsStyle.map((style) =>(
                    <Link to={(`/car/${style.id}`)} key={style.id} className="car-card">
                        <div className="car-image">
                            <img src={Array.isArray(style.imageUrl) ? style.imageUrl[0] : style.imageUrl}  alt={style.name} />
                        </div>
                        <div className="car-details">
                            <h3 className="style-name">{style.name}</h3>
                            <p className="style-description">{style.description.split(' ').slice(0, 4).join(' ')}...</p>
                            <div className="price-book">
                                <span className="price">{style.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Gallery
