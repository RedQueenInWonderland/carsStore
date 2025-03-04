import { useState } from 'react';
import React from 'react'

const Bannertop = () => {
  const [hover, setHover] = useState(false);


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 col-12" >
          <img
            src='/images/SOne_index_logo.png'
            alt="Logo bannertop"
          />

        </div>
        <div className="col-lg-9 col-md-8 col-sm-12 col-12">
          <div className="d-flex flex-column align-items-end">
            <div className="mb-2 w-md-30 w-lg-30 w-sm-100 ">
              <img
                src='/images/SOne_index_iconthai.jpg'
                alt="thaiLang"
                style={{ width: '2em' }}

              />
              <img
                src={hover ? "/images/SOne_index_iconeng.jpg" : "/images/SOne_index_iconeng2.jpg"}
                alt="EngLang"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ marginLeft: '1em', width: '2em' }}
              />
            </div>

            <div className="input-group mb-2 w-md-30 w-lg-30" >
              <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline searchBtn" type="button" id="searchbtn1">
                  <img
                    src='/images/SOne_index_btsearch.jpg'
                    alt="search"
                  />
                </button>

              </div>
            </div>

            <div>
              <ul className="list-group list-group-horizontal custom-list-group" >
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none hover-text">About S-ONE</a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none hover-text">Job Opportunity</a>
                </li>
                <li className="list-group-item ">
                  <a href="#" className="text-decoration-none hover-text">Contact Us</a>
                </li>
                <li className="list-group-item me-0 pe-0">
                  <a href="#" className="text-decoration-none hover-text">Site Map</a>
                </li>
              </ul>
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Bannertop

