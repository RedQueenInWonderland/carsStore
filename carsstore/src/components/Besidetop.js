import React from 'react'

const Besidetop = () => {
    return (
        <div>

            <div className="card rounded-0">
                <h5 className="card-header text-white rounded-0" style={{ backgroundColor: '#e97517' }} >ค้นหายาง</h5>
                <div className="card-body bg-card-custom text-white">

                    <div className="container">

                        <div className="row">
                            <div className="col-lg-8 offset-lg-4 col-md-8 offset-md-4 col-sm-10 offset-sm-2">
                                <h5 className="card-title">หน้ายาง</h5>
                                <p className="card-text">ความกว้าง (มม.)</p>
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        --เลือกหน้ายาง--
                                    </button>
                                    <div className="dropdown-menu rounded-0  selectDrop" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>

                                <h5 className="card-title">ซีรี่ส์</h5>
                                <p className="card-text">อัตราส่วนความสูงแก้มยาง (%)</p>
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        --เลือกซีรี่ย์--
                                    </button>
                                    <div className="dropdown-menu rounded-0  selectDrop" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>

                                <h5 className="card-title">กระทะล้อ</h5>
                                <p className="card-text">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        --เลือกกระทะล้อ--
                                    </button>
                                    <div className="dropdown-menu rounded-0 selectDrop" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>
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

export default Besidetop