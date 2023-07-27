import React from 'react'
import Contact1 from '../../src/component/images/contact1.png';

function Contact() {
  return (
    <div>
      <div className="container text-center contact">
        <div className="col-md-12">
          <h3>Contact us</h3>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Contact1} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact