import React from 'react'
import '../../component/static/Static.css'
import Vector1 from '../../component/images/Vector.png'
import Vector7 from '../../component/images/vector7.png'
import Vector2 from '../../component/images/vector2.png'
function Topbar() {
  return (
    <div className='testing'>
    <div className='container'>
        <div className="row">
            <div className="d-flex justify-content-end mangotop">
               <p className='help'>Need help? <a href="home">sales@mango.com</a></p>
               {/* <img src={Vector1} className='vector' alt="" />
               <img src={Vector2} alt="" /> */}

               <div className='icon-bg'>
                  <div>
                    <img src={Vector1} alt="" /> <sup>0</sup>
                  </div>
               </div>

               <div className='icon-bg2'>
                  <div>
                    <img src={Vector7} alt="" />  <sup>0</sup>
                  </div>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Topbar