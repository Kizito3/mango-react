import React from 'react'
import Bridal1 from '../../src/component/images/b1.png';
import Bridal2 from '../../src/component/images/b2.png';
import Bridal3 from '../../src/component/images/b3.png';
import Bridal4 from '../../src/component/images/b4.png';
import Bridal5 from '../../src/component/images/b5.png';
import Bridal6 from '../../src/component/images/b6.png';
import Bridal7 from '../../src/component/images/b7.png';
import Bridal8 from '../../src/component/images/b8.png';
import Bridal9 from '../../src/component/images/b9.png';

function Bridal() {
  return (
    <div>
         <div className="container">
        <div className="row heading">
          <div className="col-md-12">
            <h4>Women fashion</h4> <br />
            <h3>top bridal Outfit</h3>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Bridal1} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Bridal2} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Bridal3} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>


      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Bridal4} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Bridal5} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Bridal6} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Bridal7} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Bridal8} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Bridal9} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridal