import React from 'react'
import Women1 from '../../src/component/images/w1.png';
import Women2 from '../../src/component/images/w2.png';
import Women3 from '../../src/component/images/w3.png';
import Women4 from '../../src/component/images/w4.png';
import Women5 from '../../src/component/images/w5.png';
import Women6 from '../../src/component/images/w6.png';
import Women7 from '../../src/component/images/w7.png';
import Women8 from '../../src/component/images/w8.png';
import Women9 from '../../src/component/images/w9.png';
import Next from './Next';

function Women() {
  return (
    <div>
       <div className="container">
        <div className="row heading">
          <div className="col-md-12">
            <h4>Women fashion</h4> <br />
            <h3>dinner Outfit</h3>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Women1} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Women2} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Women3} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src={Women4} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Women5} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Women6} alt="" className='img-fluid mb-3' />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Women7} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Women8} alt="" className='img-fluid mb-3' />
          </div>

          <div className="col-md-4">
            <img src={Women9} alt="" className='img-fluid' />
          </div>

          <Next />
        </div>
      </div>
    </div>
  )
}

export default Women