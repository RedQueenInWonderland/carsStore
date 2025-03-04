import React from 'react'

const BesideR = () => {
    return (
        <div>
            <div className="card mb-3" style={{ border: 'none' }}>
                <div className="row no-gutters backgroundCard">
                    <div className="col-md-4">
                        <img src="/images/SOne_index_tips1.png" className="card-img" alt="SOne_index_tips1" />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body  text-white">
                            <h5 className="card-title textColor">Safety Tips</h5>
                            <p className="card-text">  <img src="/images/SOne_index_pic66.png" className="card-img1" alt="SOne_index_pic66" /> ควรเติมน้ำมันตอนเช้า ขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่ <img src="/images/SOne_index_pic99.png" className="card-img1" alt="SOne_index_pic99" /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4" >
                        <h5>สมัครรับข่าวสาร</h5>
                    </div>
                    <div className="col-lg-8" style={{ paddingLeft: '0', paddingRight: '0' }}>
                        <div className="input-group mb-2 w-100 w-md-100 ">
                            <input type="text" className="form-control" placeholder="กรุณาใส่อีเมล์" aria-label="กรุณาใส่อีเมล์" aria-describedby="basic-addon3" />
                            <div className="input-group-append">
                                <button className="btn btn-outline searchBtn2" type="button" id="searchbtn2">
                                    <img
                                        src='/images/SOne_index_btgo.jpg'
                                        alt="search"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 dashDup" >
                        <img
                            src='/images/SOne_index_dash--.png'
                            alt="search"
                        />
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src='/images/SOne_index_call.png'
                                alt="search"
                                style={{ width: '90%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BesideR