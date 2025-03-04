import React from 'react'
import { useState } from 'react'

const Contentinline = () => {

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMousehover = (index) => setHoverIndex(index);
  const handleMouse = () => setHoverIndex(null);

  const images = [
    { img: '/images/SOne_index_bt-tire.jpg', hover: '/images/SOne_index_bt-tire1.jpg' },
    { img: '/images/SOne_index_bt-break.jpg', hover: '/images/SOne_index_bt-break1.jpg' },
    { img: '/images/SOne_index_bt-battery.jpg', hover: '/images/SOne_index_bt-battery1.jpg' },
    { img: '/images/SOne_index_bt-chokeup.jpg', hover: '/images/SOne_index_bt-chokeup1.jpg' },
    { img: '/images/SOne_index_bt-oil.jpg', hover: '/images/SOne_index_bt-oil1.jpg' },
    { img: '/images/SOne_index_bt-guarantee.jpg', hover: '/images/SOne_index_bt-guarantee1.jpg' },
  ];

  return (
    <div className='container-fluid'>
      <div className="row justify-content-between">
        {images.map((image, index) => (
          <div className="col-lg-2 col-md-4 col-sm-6 col-12" key={image.img}>
            <div className="card">
              <img
                // key={index}
                src={hoverIndex === index ? image.hover : image.img}
                alt={`image ${index + 1}`}
                onMouseEnter={() => handleMousehover(index)}
                onMouseLeave={handleMouse}

              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contentinline