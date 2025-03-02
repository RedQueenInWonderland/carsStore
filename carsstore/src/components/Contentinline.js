import React from 'react'
import { useState } from 'react'
import '../assets/css/bootstrap.min.css'

const Contentinline = () => {
    
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMousehover = (index) => setHoverIndex(index);
    const handleMouse = () => setHoverIndex(null);

    // const [imageChange, setImageChange] = useState({
    //     img1:'/images/SOne_index_bt-tire.jpg',
    //     img2:'/images/SOne_index_bt-break.jpg',
    //     img3:'/images/SOne_index_bt-battery.jpg',
    //     img4:'/images/SOne_index_bt-chokeup.jpg',
    //     img5:'/images/SOne_index_bt-oil.jpg',
    //     img6:'/images/SOne_index_bt-guarantee.jpg',

    // })

    // const imageHover = {
    //     img1:'/images/SOne_index_bt-tire1.jpg',
    //     img2:'/images/SOne_index_bt-break1.jpg',
    //     img3:'/images/SOne_index_bt-battery1.jpg',
    //     img4:'/images/SOne_index_bt-chokeup1.jpg',
    //     img5:'/images/SOne_index_bt-oil1.jpg',
    //     img6:'/images/SOne_index_bt-guarantee1.jpg',
    // }

    // const handleMouseHover = (key) => {
    //     setImageChange((prevState)=> ({
    //         ...prevState,
    //         [key]:imageHover[key],
    //     }))
    // }

    // const handleMouse = (key) => {
    //     setImageChange((prevState)=> ({
    //         ...prevState,
    //         // [key]:`/images/${key}.jpg`,
    //         [key] : prevState[key],
    //     }))
    // }

    // const handleMouseHover = (key) => {
    //     setImageChange((prevState) => ({
    //       ...prevState,
    //     //   [key]: imageHover[key], // Set to hover image
    //       [key]: `/images/${key}1.jpg`,
    //     }));
    //     console.log("hover",imageChange)
    //   };
    
    //   // Reset to original image when mouse leaves
    //   const handleMouse = (key) => {
    //     setImageChange((prevState) => ({
    //       ...prevState,
    //       [key]: `/images/${key}.jpg`,
    //     //   [key]: prevState[key], // Reset to the original image
    //     }));
    //     console.log("remove",key)
    //   };

      const images = [
        { img: '/images/SOne_index_bt-tire.jpg', hover: '/images/SOne_index_bt-tire1.jpg' },
        { img: '/images/SOne_index_bt-break.jpg', hover: '/images/SOne_index_bt-break1.jpg' },
        { img: '/images/SOne_index_bt-battery.jpg', hover: '/images/SOne_index_bt-battery1.jpg' },
        { img: '/images/SOne_index_bt-chokeup.jpg', hover: '/images/SOne_index_bt-chokeup1.jpg' },
        { img: '/images/SOne_index_bt-oil.jpg', hover: '/images/SOne_index_bt-oil1.jpg' },
        { img: '/images/SOne_index_bt-guarantee.jpg', hover: '/images/SOne_index_bt-guarantee1.jpg' },
      ];

    //   img1:'/images/SOne_index_bt-tire.jpg',
    //   img2:'/images/SOne_index_bt-break.jpg',
    //   img3:'/images/SOne_index_bt-battery.jpg',
    //   img4:'/images/SOne_index_bt-chokeup.jpg',
    //   img5:'/images/SOne_index_bt-oil.jpg',
    //   img6:'/images/SOne_index_bt-guarantee.jpg',

      
  return (
      <div className='container-fluid'>
          <div class="row justify-content-between">
              {images.map((image, index) => (
                  <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                      <div class="card">
                          <img
                              key={index}
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
    //   <div className='Container'>
    //       <div class="row justify-content-between">
    //           <div class="col-2">
    //               <div class="card">

    //               <img
    //     src={isHovered ? '/images/SOne_index_bt-tire.jpg' : '/images/SOne_index_bt-tire1.jpg'}
    //     alt="hover example"
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}

    //   />
    //               {/* <img
    //               src={imageChange.img1}
    //               class="img-fluid"
    //               alt="SOne_index_bt-tire"
    //               onMouseEnter={()=> handleMouseHover('img1')}
    //               onMouseLeave={()=> handleMouse('img1')}
    //               /> */}
    //               </div>
    //           </div>
    //           <div class="col-2">
    //               <div class="card">
    //               <img
    //               src={imageChange.img2}
    //               class="img-fluid"
    //               alt="SOne_index_bt-break"
    //               onMouseEnter={()=> handleMouseHover('img2')}
    //               onMouseLeave={()=> handleMouse('img2')}
    //               />
    //               </div>
    //           </div>
    //           <div class="col-2">
    //           <div class="card">
    //               <img
    //               src={imageChange.img3}
    //               class="img-fluid"
    //               alt="SOne_index_bt-battery"
    //               onMouseEnter={()=> handleMouseHover('img3')}
    //               onMouseLeave={()=> handleMouse('img3')}
    //               />
    //               </div>
    //           </div>
    //           <div class="col-2">
    //           <div class="card">
    //               <img
    //               src={imageChange.img4}
    //               class="img-fluid"
    //               alt="SOne_index_bt-chokeup"
    //               onMouseEnter={()=> handleMouseHover('img4')}
    //               onMouseLeave={()=> handleMouse('img4')}
    //               />
    //               </div>
    //           </div>
    //           <div class="col-2">
    //           <div class="card">
    //               <img
    //               src={imageChange.img5}
    //               class="img-fluid"
    //               alt="SOne_index_bt-oil"
    //               onMouseEnter={()=> handleMouseHover('img5')}
    //               onMouseLeave={()=> handleMouse('img5')}
    //               />
    //               </div>
    //           </div>
    //           <div class="col-2">
    //           <div class="card">
    //               <img
    //               src={imageChange.img6}
    //               class="img-fluid"
    //               alt="SOne_index_bt-guarantee"
    //               onMouseEnter={()=> handleMouseHover('img6')}
    //               onMouseLeave={()=> handleMouse('img6')}
    //               />
    //               </div>
    //           </div>
    //       </div>


    // </div>
  )
}

export default Contentinline