import React from 'react'
import '../../src/component/Main.css';
import Hero from '../../src/component/images/h1.png';
import Hero2 from '../../src/component/images/h2.png';
import Hero3 from '../../src/component/images/h31.png';
import Hero4 from '../../src/component/images/h4 1.png';
import Hero5 from '../../src/component/images/h5 1 (2).png';

function Body() {
  return (
    <div>
        <div className="container herobody">
            <div className="row">

                <div className="col-md-4 text-center">
                    <h5>Free shipping</h5>
                    <p>On orders above $3000</p>
                </div>

                <div className="col-md-4 text-center">
                    <h5>Refer a friend</h5>
                    <p>And get 20% off your next purchase</p>
                </div>

                <div className="col-md-4 text-center">
                    <h5>delivery duration</h5>
                    <p>Less than 72 hrs (Lagos)</p>
                </div>
            </div>
        </div>

        <div className="container text-center back">
            <div className="row">
                <div className="col-md-4">
                    <img src={Hero} alt="" className='img-fluid'/>
                    <h5>Trad</h5>
                </div>

                <div className="col-md-4">
                    <img src={Hero2} alt="" className='img-fluid' />
                    <h5>Tuxedo</h5>
                </div>

                <div className="col-md-4">
                    <img src={Hero3} alt="" className='img-fluid' />
                    <h5>Bridal</h5>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <img src={Hero4} alt="" className='img-fluid' />
                        <h5>suit</h5>
                    </div>
                    <div className="col-md-8">
                        <img src={Hero5} alt="" className='img-fluid img' />
                        <h5>dinner</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body