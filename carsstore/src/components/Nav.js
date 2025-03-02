import React from 'react'
import { useState } from 'react';
import '../assets/css/bootstrap.min.css'

const Nav = () => {

    // const [hover, setHover] = useState(false);
    // const [hover2, setHover2] = useState(false);
    // const [hover3, setHover3] = useState(false);
    // const [hover4, setHover4] = useState(false);
    // const [hover5, setHover5] = useState(false);
    // const [hover6, setHover6] = useState(false);

    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMousehover = (index) => setHoverIndex(index);
    const handleMouse = () => setHoverIndex(null);

    const images = [
        { img: '/images/SOne_index_btfacebook.png', hover: '/images/SOne_index_btfacebook1.png' },
        { img: '/images/SOne_index_bttwitter.png', hover: '/images/SOne_index_bttwitter1.png' },
        { img: '/images/SOne_index_btyoutube.png', hover: '/images/SOne_index_btyoutube1.png' },
    ];

    const menuItems = [
        { key: "promotions", label: "Promotions" },
        { key: "news", label: "News & Events" },
        { key: "safety", label: "Safety Tips" },
        { key: "faqs", label: "FAQS" },
        { key: "location", label: "Location" },
    ];

    const [hoverStates, setHoverStates] = useState({
        promotions: false,
        news: false,
        safety: false,
        faqs: false,
        location: false,
    });

    const handleMouseEnter = (key) => {
        setHoverStates((prev) => ({ ...prev, [key]: true }));
    };

    const handleMouseLeave = (key) => {
        setHoverStates((prev) => ({ ...prev, [key]: false }));
    };

    return (
        <div >

            <nav class="navbar navbar-expand-lg bg-dark">
                {/* <div class="row"></div> */}
                {/* <a class="navbar-brand" href="#">Product & Services</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button> */}  
                  {/* <div className="container">

                    
                  </div> */}

                <div class="collapse navbar-collapse" id="navbarNav">
                    
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" style={{ color: '#e97517' }} href="#">
                                <img
                                    src={"/images/SOne_index_menu02.png"}
                                    alt="SOne_index_menu01"
                                    // onMouseEnter={() => setHover(true)}
                                    // onMouseLeave={() => setHover(false)}
                                    style={{ marginRight: '0.5em' }}
                                />
                                Product & Services
                                <span class="sr-only">(current)</span></a>

                        </li>
   
                        {menuItems.map(({ key, label }) => (
                            <li className="nav-item" key={key}>
                                <a className="nav-link hover-nav" href="#">
                                    <img
                                        src={
                                            hoverStates[key]
                                                ? "/images/SOne_index_menu02.png"
                                                : "/images/SOne_index_menu01.png"
                                        }
                                        alt={label}
                                        onMouseEnter={() => handleMouseEnter(key)}
                                        onMouseLeave={() => handleMouseLeave(key)}
                                        style={{ width: "1.5em", marginRight: "0.5em" }}
                                    />
                                    {label}
                                </a>
                            </li>
                        ))}
                        {/* <li class="nav-item">
                            <a class="nav-link hover-nav" href="#">
                                <img
                                    src={hover2 ? "/images/SOne_index_menu02.png" : "/images/SOne_index_menu01.png"}
                                    alt="SOne_index_menu01"
                                    onMouseEnter={() => setHover2(true)}
                                    onMouseLeave={() => setHover2(false)}
                                    style={{ marginRight: '0.5em' }}
                                />
                                Promotions
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-nav" href="#">
                                <img
                                    src={hover3 ? "/images/SOne_index_menu02.png" : "/images/SOne_index_menu01.png"}
                                    alt="SOne_index_menu01"
                                    onMouseEnter={() => setHover3(true)}
                                    onMouseLeave={() => setHover3(false)}
                                    style={{ marginRight: '0.5em' }}
                                />
                                News & Events

                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-nav" href="#">
                                <img
                                    src={hover4 ? "/images/SOne_index_menu02.png" : "/images/SOne_index_menu01.png"}
                                    alt="SOne_index_menu01"
                                    onMouseEnter={() => setHover4(true)}
                                    onMouseLeave={() => setHover4(false)}
                                    style={{ marginRight: '0.5em' }}
                                />
                                Safety Tips

                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hover-nav" href="#">
                                <img
                                    src={hover5 ? "/images/SOne_index_menu02.png" : "/images/SOne_index_menu01.png"}
                                    alt="SOne_index_menu01"
                                    onMouseEnter={() => setHover5(true)}
                                    onMouseLeave={() => setHover5(false)}
                                    style={{ marginRight: '0.5em' }}
                                />
                                FAQS

                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-decoration-none hover-text" href="#">
                                <img
                                    src={hover6 ? "/images/SOne_index_menu02.png" : "/images/SOne_index_menu01.png"}
                                    alt="SOne_index_menu01"
                                    onMouseEnter={() => setHover6(true)}
                                    onMouseLeave={() => setHover6(false)}
                                    style={{ marginRight: '0.5em' }}
                                />
                                Location
                            </a>
                        </li> */}

                    </ul>

                    <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

                </div>

                <div class="d-flex flex-row flex-wrap align-items-end">
                    {images.map((image, index) => (
                        //   <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div>
                            <img
                                key={index}
                                src={hoverIndex === index ? image.hover : image.img}
                                alt={`image ${index + 1}`}
                                onMouseEnter={() => handleMousehover(index)}
                                onMouseLeave={handleMouse}
                                style={{ width: '1.7em', marginLeft: '1em' }}

                            />
                        </div>
                        //   </div>
                    ))}
                </div>
            </nav>
        </div>
    )
}


export default Nav