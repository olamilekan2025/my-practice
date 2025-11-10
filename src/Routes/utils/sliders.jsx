import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
       <div className="slideBox">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ2vhLzIdtwpwXw90ZuWhngB-MdFsjD64CQ&s" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://www.maxfosterphotography.com/images/xl/Lush.jpg" alt="" /></div>
       <div className="slideBox">
        <img src="https://naturalsnapshots.com/cdn/shop/articles/Picture_10_3_1_5_x_7_in_6fef61f1-d21f-4f30-a3b3-67011cfb80de.jpg?v=1746196316" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://media.licdn.com/dms/image/v2/D5612AQENltQvmBK5Gg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713421064651?e=2147483647&v=beta&t=nEx2PdetKjbU-evubqR_Bv2VRqfpRMJRWtRJZYYKFmo" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://thumbs.dreamstime.com/blog/2022/09/theraputic-benefits-nature-photography-85891-image41645665.jpg" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://jurlique.com.au/cdn/shop/articles/7_WAYS_TO_MAKE_EVERY_DAY_EARTH_DAY_9c2990e0-c893-4d66-9e7a-29b89c8dcf60.jpg?v=1742172049&width=1920" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://www.wwf.org.uk/sites/default/files/styles/content_slide_image/public/2019-11/woodland%20picture.jpg?h=3f65c786&itok=R5iXmmE_" alt="" />
       </div>
       <div className="slideBox">
        <img src="https://base-prod.rspb-prod.magnolia-platform.com/.imaging/focalpoint/_WIDTH_x_HEIGHT_/dam/jcr:f63acb38-b6da-4d59-b54a-6beae07bb64e/1894362448-Habitat-woodland-forest-in-Yorkshire.jpg" alt="" />
       </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;




