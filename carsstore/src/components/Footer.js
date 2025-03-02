import React from 'react'

const Footer = () => {
  return (
      <div className='container-fluid'>
          <div class="row">
              <div class="col-lg-1 col-md-3 col-sm-3 col-5">
                  <img
                      src='/images/SOne_index_logos.png'
                      //   src={isHovered ? '/images/SOne_index_bt-tire.jpg' : '/images/SOne_index_bt-tire1.jpg'}
                      alt="Logo footer"
                  //   onMouseEnter={handleMouseEnter}
                  //   onMouseLeave={handleMouseLeave}

                  />

              </div>
              <div class="col-lg-11 col-md-9 col-sm-9 col-7 bg-dark text-white rounded p-2">Copyright © 2014</div>
          </div>
      </div>



  )
}

export default Footer