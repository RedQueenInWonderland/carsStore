import React from 'react'
import { useState } from 'react';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
    const imgIcons = {
        active: "/images/SOne_index_bullet1.png",  
        normal: "/images/SOne_index_bullet2.png",  
    };

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm">
                {Array.from({ length: totalPages }, (_, index) => {
                    const isActive = currentPage === index + 1;
                    const isHovered = hoverIndex === index;

                    return (
                        <li
                            key={index}
                            className={`page-item ${isActive ? "active" : ""}`}
                            onClick={() => onPageChange(index + 1)}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="page-link">
                                <img
                                    src={isActive || isHovered ? imgIcons.active : imgIcons.normal}
                                    alt={`Page ${index + 1}`}
                                    style={{ width: "1em", height: "auto" }}
                                />


                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

const ContentCenter = () => {

    const newsData = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,  // Dynamically change the id
        img: "/images/SOne_index_news_23.jpg",  // Same image for all
        title: `ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม ${index + 1}`, 
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 

    const totalItems = 9;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const currentData = newsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>

            <div className="card rounded-0" style={{ borderColor: '#e97517' }}>
                <div className="card-header d-flex justify-content-between align-items-center p-1" style={{ backgroundColor: 'white', borderColor: '#e97517' }}>
                    <h5 className="text-dark rounded-0 " style={{ borderColor: '#e97517' }}>News & Events</h5>
                    <PaginationComponent
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
                <div className="card-body bg-card-custom-content text-white p-0">
                    <div className="container">
                        <div className="row">
                            {currentData.map((news) => (
                                <div className="col-md-4 mb-3" key={news.id}>
                                    <div className="card" style={{ width: '18em', borderColor: '#e97517' }}>
                                        <img src={news.img} className="card-img-top" alt={news.title} />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <a href="#" style={{ color: 'black' }}>
                                                    {news.title}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="floating-box">
                                            <p>19
                                                NOV
                                                2014</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCenter