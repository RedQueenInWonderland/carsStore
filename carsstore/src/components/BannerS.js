import React, { useState } from 'react';


const BannerS = () => {

  const images = [
    "/images/SOne_index_banner.jpg",
    "/images/SOne_index_banner.jpg",
    "/images/SOne_index_banner.jpg",
  ];

  const defaultPreviewImage = "/images/SOne_index_pic02.jpg";
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPreviewActive, setIsPreviewActive] = useState(false);

  const getNextIndex = (direction) => {
    if (direction === "next") {
      return (currentIndex + 1) % images.length;
    } else {
      return (currentIndex - 1 + images.length) % images.length;
    }
  };

  const handleHover = (direction) => {
    setIsPreviewActive(true);
    setTimeout(() => setIsPreviewActive(false), 1000); 
  };

  // const handleHover = (direction) => {
  //   setIsPreviewActive(true); // Activate border when hovering

  //   const totalImages = images.length;
  //   let nextIndex;

  //   if (direction === "next") {
  //     nextIndex = (currentIndex + 1) % totalImages;
  //   } else {
  //     nextIndex = (currentIndex - 1 + totalImages) % totalImages;
  //   }

  //   setNextImage(images[nextIndex]);

  //   setTimeout(() => setIsPreviewActive(false), 1000); // Remove border after delay
  // };




  return (
    <div className="carousel-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">


        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === currentIndex ? "active" : ""}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? "active" : ""}`}
              data-index={index}
            >
              <img src={image} className="d-block w-100" alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Next and previous controls */}

        <div className="carousel-controls-container">
          <div className="carousel-control-wrapper">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
              onMouseEnter={() => handleHover('prev')}
              onClick={() => setCurrentIndex(getNextIndex("prev"))}
            >
              <img src="/images/SOne_index_arrowup.png" alt="Previous" className="custom-carousel-icon1" />
            </a>
          </div>

          <div className="carousel-control-wrapper">
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
              onMouseEnter={() => handleHover('next')}
              onClick={() => setCurrentIndex(getNextIndex("next"))}
            >
              <img src="/images/SOne_index_arrowdown.png" alt="Next" className="custom-carousel-icon2" />
            </a>
          </div>
        </div>
      </div>

      
      
      {/* Floating preview box */}
      <div className={`  d-none d-lg-block image-preview-box ${isPreviewActive ? "active-border" : ""}`}>
        <img src={images[currentIndex]} alt="Active Image" /> {/* Active image */}
        <img src={images[getNextIndex("next")]} alt="Next Preview" /> {/* Next preview image */}
        <img src={images[getNextIndex("next") + 1] || defaultPreviewImage} alt="Next Preview 2" /> {/* Next+1 or default */}
      </div>

    </div>
  );
}

export default BannerS;
