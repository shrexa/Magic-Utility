import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>

      {/* Internal CSS */}
      <style jsx>{`
        /* Slider Container */
        .slider-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          box-sizing: border-box;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Image Style */
        .slider-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Customize Slick Dots */
        .slick-dots {
          bottom: 10px;
        }

        .slick-dots li button:before {
          color: #fff;
          opacity: 0.6;
        }

        .slick-dots li.slick-active button:before {
          color: #007bff;
          opacity: 1;
        }

        /* Customize Slick Arrows */
        .slick-prev, .slick-next {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          z-index: 10;
        }

        .slick-prev {
          left: 10px;
        }

        .slick-next {
          right: 10px;
        }

        .slick-prev:before, .slick-next:before {
          color: #fff;
          font-size: 18px;
        }

        /* Ensure smooth transitions */
        .slick-slide {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default ImageSlider;
