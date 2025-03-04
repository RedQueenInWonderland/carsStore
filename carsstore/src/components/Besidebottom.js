import React from 'react'

const Besidebottom = () => {
  return (
    <div>

      <div className="card rounded-0">
        <h5 className="card-header text-white rounded-0" style={{ backgroundColor: '#e97517' }} >ค้นหาศูนย์บริการใกล้บ้านคุณ</h5>
        <div className="card-body text-white backgroundCard">

          <div className="container">

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-100">
                <h5 className="selectDropText" >จังหวัด</h5>
                <h5 className="selectDropText" >เขต/อำเภอ</h5>
                <h5 className="selectDropText">ถนน</h5>

              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-100">

                <div className="dropdown">

                  <button className="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    --เลือกจังหวัด--
                  </button>
                  <div className="dropdown-menu rounded-0  selectDrop" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    --เลือกเขต/อำเภอ--
                  </button>
                  <div className="dropdown-menu rounded-0  selectDrop" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    --เลือกถนน--
                  </button>
                  <div className="dropdown-menu rounded-0 selectDrop" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-12 mb-3">
                <div style={{ textAlign: 'center' }}>
                  <p className="card-text text-danger">หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-4 col-md-8 offset-md-4 col-sm-8 offset-sm-4 col-100">

                <div style={{ textAlign: 'center' }}>

                  <a href="#">
                    <img
                      src='/images/SOne_index_search.png'
                      alt="thaiLang"
                      style={{ width: '9em' }}
                    />
                  </a>

                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

    </div>
  )
}

export default Besidebottom