import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots :false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Responsive-container">
      <Slider {...settings}>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://yourworkpal.com/wp-content/uploads/2022/07/AdobeStock_340695937.jpeg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.bmu.edu.in/wp-content/uploads/2025/02/Types-of-Engineering.webp"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Aerospace engineering</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/17MEOgCd3uhDI8TaTp5m9h/8d09b3a36b6239b569653b70f62733c1/Teamwork-in-construction-industry---two-engineers-working-together-on-construction-site-with-blueprints-and-plans-645373486.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Chemical Engineering</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://guru.com/blog/wp-content/uploads/2023/04/civil-engineer-duties.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Environmental Engineering</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Biomedical engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/43b5N2vPEIWvcqHHnAPs9W/a1c27d9ca50ba42bab5ef392064212e4/iStock-996179448.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Electrical engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://yourworkpal.com/wp-content/uploads/2022/07/AdobeStock_340695937.jpeg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Mechanical Engineering</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://guru.com/blog/wp-content/uploads/2023/04/civil-engineer-duties.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Industrial Engineering</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/43b5N2vPEIWvcqHHnAPs9W/a1c27d9ca50ba42bab5ef392064212e4/iStock-996179448.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Materials Engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Marine engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F11%2FMechanical-Engineering.jpg&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Geotechnical Engineering</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://guru.com/blog/wp-content/uploads/2023/04/civil-engineer-duties.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Petroleum Engineering</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/43b5N2vPEIWvcqHHnAPs9W/a1c27d9ca50ba42bab5ef392064212e4/iStock-996179448.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Construction engineering</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, itaque?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/43b5N2vPEIWvcqHHnAPs9W/a1c27d9ca50ba42bab5ef392064212e4/iStock-996179448.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt=""
            />
          </div>
          <div className="responsiveText">
                   <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-7-2025-12_59_14-PM-450x300.png"
              alt=""
            />
          </div>
          <div className="responsiveText">
               <h2>Marine engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://guru.com/blog/wp-content/uploads/2023/04/civil-engineer-duties.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F11%2FMechanical-Engineering.jpg&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="responsiveText">
               <h2>Marine engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/43b5N2vPEIWvcqHHnAPs9W/a1c27d9ca50ba42bab5ef392064212e4/iStock-996179448.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
               <h2>Marine engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-7-2025-12_59_14-PM-450x300.png"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://guru.com/blog/wp-content/uploads/2023/04/civil-engineer-duties.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
                   <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F11%2FMechanical-Engineering.jpg&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Computer Engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum earum!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://connect-assets.prosple.com/cdn/ff/KKPNY0OdwfovCQBCY_t1w3H0ZKNyEcD_LhNpRTKs6Bw/1568097249/public/styles/scale_890_no_upsize/public/2019-09/feature-article-get-that-job-essential-skills-for-ever-graduate-engineer-838x484-2019.png?itok=LjOWnGm8"
              alt=""
            />
          </div>
          <div className="responsiveText">
               <h2>Marine engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-7-2025-12_59_14-PM-450x300.png"
              alt=""
            />
          </div>
          <div className="responsiveText">
               <h2>Marine engineering</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro?</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://connect-assets.prosple.com/cdn/ff/KKPNY0OdwfovCQBCY_t1w3H0ZKNyEcD_LhNpRTKs6Bw/1568097249/public/styles/scale_890_no_upsize/public/2019-09/feature-article-get-that-job-essential-skills-for-ever-graduate-engineer-838x484-2019.png?itok=LjOWnGm8"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Computer Engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum earum!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F11%2FMechanical-Engineering.jpg&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="responsiveText">
                   <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F11%2FMechanical-Engineering.jpg&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Computer Engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum earum!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-7-2025-12_59_14-PM-450x300.png"
              alt=""
            />
          </div>
          <div className="responsiveText">
                   <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://connect-assets.prosple.com/cdn/ff/KKPNY0OdwfovCQBCY_t1w3H0ZKNyEcD_LhNpRTKs6Bw/1568097249/public/styles/scale_890_no_upsize/public/2019-09/feature-article-get-that-job-essential-skills-for-ever-graduate-engineer-838x484-2019.png?itok=LjOWnGm8"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Computer Engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum earum!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-7-2025-12_59_14-PM-450x300.png"
              alt=""
            />
          </div>
          <div className="responsiveText">
                   <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://online.njit.edu/sites/online/files/5%20Lucrative%20Careers%20in%20Electrical%20Engineering.jpg"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Computer Engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum earum!</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://connect-assets.prosple.com/cdn/ff/KKPNY0OdwfovCQBCY_t1w3H0ZKNyEcD_LhNpRTKs6Bw/1568097249/public/styles/scale_890_no_upsize/public/2019-09/feature-article-get-that-job-essential-skills-for-ever-graduate-engineer-838x484-2019.png?itok=LjOWnGm8"
              alt=""
            />
          </div>
          <div className="responsiveText">
            <h2>Civil Engineering</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
          </div>
        </div>
        <div className="ResponsiveCards">
          <div className="responsiveImage">
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-7-2025-12_59_14-PM-450x300.png"
              alt=""
            />
          </div>
          <div className="responsiveText">
                   <h2>Nuclear engineering</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
