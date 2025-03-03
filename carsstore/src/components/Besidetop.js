import React from 'react'

const Besidetop = () => {
    return (
        <div>

            <div class="card rounded-0">
                <h5 class="card-header text-white rounded-0" style={{ backgroundColor: '#e97517' }} >ค้นหายาง</h5>
                <div class="card-body bg-card-custom text-white">

                    <div class="container">

                        <div class="row">
                            <div class="col-lg-8 offset-lg-4 col-md-8 offset-md-4 col-sm-10 offset-sm-2">
                                <h5 class="card-title">หน้ายาง</h5>
                                <p class="card-text">ความกว้าง (มม.)</p>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        --เลือกหน้ายาง--
                                    </button>
                                    <div class="dropdown-menu rounded-0  selectDrop" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>

                                <h5 class="card-title">ซีรี่ส์</h5>
                                <p class="card-text">อัตราส่วนความสูงแก้มยาง (%)</p>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        --เลือกซีรี่ย์--
                                    </button>
                                    <div class="dropdown-menu rounded-0  selectDrop" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                    </div>
                                </div>

                                <h5 class="card-title">กระทะล้อ</h5>
                                <p class="card-text">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle rounded-0 selectDrop" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        --เลือกกระทะล้อ--
                                    </button>
                                    <div class="dropdown-menu rounded-0 selectDrop" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
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