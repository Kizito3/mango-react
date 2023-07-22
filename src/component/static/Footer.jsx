import React from 'react'
import '../../component/static/Static.css'
import {Link} from 'react-router-dom'
import Line from '../../component/images/Line 2.png'
import Vector from '../../component/images/Vector3.png'
import Vector1 from '../../component/images/Vector4.png'
import Vector2 from '../../component/images/Vector5.png'
import Vector3 from '../../component/images/Vector6.png'

function Footer() {
  return (
    <div>
      <div className="container footer ">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick links</h5>
            <p> <Link to='/men' className='link'>Men</Link></p>
            <p><Link to="/women" className='link'>Women</Link></p>
            <p><Link to="/bridal" className='link'>Bridal</Link></p>
            <p><Link to="/traditional" className='link'>Traditional</Link></p>
            <p><Link to="/about" className='link'>About</Link></p>
            <p><Link to="/contact" className='link'>Contact</Link></p>

          </div>

          <div className="col-md-4">
            <h5>oUR SERVICES</h5>
            <p>Sell on MANGO</p>
            <p>Branding and Production</p>
            <p>Bulk Purchase and order</p>
            <p>Request Personal Stylist</p>
          </div>

          <div className="col-md-4">
            <h5>CONTACT US</h5>
            <p>Corporate Office  648B, Ferryland Oklahoma, USA.</p><br />
            <p>Sales@Mango.com <br />
            Mango@gmail.com</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row text-center footer-para">
          <div className="col-md-12">
            <p>Be the first to know about our private sales and news</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Line} alt="" className='img-fluid' />
          </div>
          <div className="col-md-4 text-center">
            <input type="text" placeholder='Enter your email address' />
          </div>
          <div className="col-md-4">
            <img src={Line} alt="" className='img-fluid' />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center mt-2">
              <button className='button1'>Subscribe</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center mt-2">
            <img src={Vector} alt="" className='img-fluid' />
            <span className='mx-3'>Nigeria</span>
            <img src={Vector1} alt="" className='img-fluid' />
          </div>
        </div>

        <div className="row text-center display mt-5 pt-3">
         <div className="col-md-1"> <span>Help</span></div> 
          <div className="col-md-1"><span>Register</span></div>
          <div className="col-md-1"><span>Company</span></div> 
          <div className="col-md-1"> <span>Shop</span></div>
          <div className="col-md-1"><span>Services</span></div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md-12">
            <img src={Vector2} alt="" className='img-fluid' />
        </div>
        </div>

        <div className="row text-center mt-5 testing1">
          <div className="col-md-12">
            
            <p> <img src={Vector3} alt="" className='img-fluid image' />2023 All right reserved</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer