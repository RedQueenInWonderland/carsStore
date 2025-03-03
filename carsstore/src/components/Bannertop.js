
// import '../assets/css/bootstrap.min.css'
import { useState } from 'react';
// import sicon from '../../public/images/SOne_index_btsearch.jpg'

// eslint-disable-next-line
// import '../assets/js/bootstrap.bundle.min.js';


import React from 'react'

const Bannertop = () => {
  const [hover, setHover] = useState(false);


  return (
    <div className='container-fluid'>
    <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-12 col-12" >
            <img
                src='/images/SOne_index_logo.png'
                //   src={isHovered ? '/images/SOne_index_bt-tire.jpg' : '/images/SOne_index_bt-tire1.jpg'}
                alt="Logo bannertop"
            //   onMouseEnter={handleMouseEnter}
            //   onMouseLeave={handleMouseLeave}
          />

        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 col-12">
          <div class="d-flex flex-column align-items-end">
            <div class="mb-2 w-md-30 w-lg-30 w-sm-100 ">
              <img
                src='/images/SOne_index_iconthai.jpg'
                alt="thaiLang"
                style={{  width:'2em'}}

              />
              <img
                src={hover ? "/images/SOne_index_iconeng.jpg" : "/images/SOne_index_iconeng2.jpg"}
                alt="EngLang"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ marginLeft: '1em' , width:'2em'}}
              />
            </div>

            <div class="input-group mb-2 w-md-30 w-lg-30" >
              <input type="text" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-outline searchBtn" type="button" id="searchbtn1">
                  <img
                    src='/images/SOne_index_btsearch.jpg'
                    alt="search"
                  />
                </button>

              </div>
            </div>

            <div>
              <ul class="list-group list-group-horizontal custom-list-group" >
                <li class="list-group-item">
                  <a href="#" class="text-decoration-none hover-text">About S-ONE</a>
                </li>
                <li class="list-group-item">
                  <a href="#" class="text-decoration-none hover-text">Job Opportunity</a>
                </li>
                <li class="list-group-item ">
                  <a href="#" class="text-decoration-none hover-text">Contact Us</a>
                </li>
                <li class="list-group-item me-0 pe-0">
                  <a href="#" class="text-decoration-none hover-text">Site Map</a>
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

