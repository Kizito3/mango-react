import React from 'react';
import Men1 from '../../src/component/images/m1.png';
import Men2 from '../../src/component/images/m2.png';
import Men3 from '../../src/component/images/m3.png';
import Men4 from '../../src/component/images/m4.png';
import Men5 from '../../src/component/images/m5.png';
import Men6 from '../../src/component/images/m6.png';
import Men7 from '../../src/component/images/m7.png';
import Men8 from '../../src/component/images/m8.png';
import Men9 from '../../src/component/images/m9.png';

function Men() {
  return (
    <div>

      <div className="container">
        <div className="row heading">
          <div className="col-md-12">
            <h4>Men fashion</h4> <br />
            <h3>suit and tuxedo</h3>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Men1} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Men2} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Men3} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Men4} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Men5} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Men6} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Men7} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Men8} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Men9} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Men