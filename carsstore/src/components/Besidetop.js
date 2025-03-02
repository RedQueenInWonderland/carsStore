import React from 'react'

const Besidetop = () => {
    return (
        <div>

            <div class="card rounded-0">
                <h5 class="card-header customhead" >ค้นหายาง</h5>
                <div class="card-body bg-card-custom text-white">

                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6 offset-lg-4">
                            <h5 class="card-title">หน้ายาง</h5>
                    <p class="card-text">ความกว้าง (มม.)</p>

                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div role="separator" class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                    </div>

                    <h5 class="card-title">ซีรี่ส์</h5>
                    <p class="card-text">อัตราส่วนความสูงแก้มยาง (%)</p>

                    <h5 class="card-title">กระทะล้อ</h5>
                    <p class="card-text">เส้นผ่าศูนย์กลาง (นิ้ว)</p>


                    <img
                        src='/images/SOne_index_search.png'
                        alt="thaiLang"
                        style={{ width: '9em' }}

                    />

                            </div>
                        </div>
                    </div>


                   



                </div>
            </div>

        </div>
    )
}

export default Besidetop