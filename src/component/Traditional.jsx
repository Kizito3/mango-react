import React from 'react'
import Trad1 from '../../src/component/images/t1.png';
import Trad2 from '../../src/component/images/t2.png';
import Trad3 from '../../src/component/images/t3.png';
import Trad4 from '../../src/component/images/t4.png';
import Trad5 from '../../src/component/images/t5.png';
import Trad6 from '../../src/component/images/t6.png';

function Traditional() {
  return (
    <div>
      <div className="container men-trad">
        <div className="row">
          <div className="col-md-12">
            <h4>M<span>E</span>N's TRAD</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <img src={Trad1} alt="" className="img-fluid mb-3" />
          </div>

          <div className="col-md-4">
              <img src={Trad2} alt="" className="img-fluid mb-3" />
          </div>

          <div className="col-md-4">
              <img src={Trad3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container men-trad mt-5">
        <div className="row">
          <div className="col-md-12">
            <h4>WOM<span>E</span>N's TRAD</h4>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4">
              <img src={Trad4} alt="" className="img-fluid mb-3" />
          </div>

          <div className="col-md-4">
              <img src={Trad5} alt="" className="img-fluid mb-3" />
          </div>

          <div className="col-md-4">
              <img src={Trad6} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traditional