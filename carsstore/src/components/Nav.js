import React from 'react'
import { useState } from 'react';

const Nav = () => {

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

            <nav className="navbar navbar-expand-lg backgroundNav">

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" style={{ color: '#e97517' }} href="#">
                                <img
                                    src={"/images/SOne_index_menu02.png"}
                                    alt="SOne_index_menu01"
                                    style={{ marginRight: '0.5em' }}
                                />
                                Product & Services
                                <span className="sr-only">(current)</span></a>

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

                    </ul>

                </div>
                {/* Hamburger Menu md amd mobile size */}
                <nav className="navbar navbar-dark backgroundNav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                {/* Hamburger Menu close */}

                <div className="d-flex flex-row flex-wrap align-items-end">
                    {images.map((image, index) => (
                        //   <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div key={image.img}>
                            <img
                                // key={index}
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