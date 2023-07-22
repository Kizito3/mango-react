import React from 'react'
import '../../component/static/Static.css'
import Vector1 from '../../component/images/vector1.png'
import Vector2 from '../../component/images/vector2.png'
function Topbar() {
  return (
    <div className='testing'>
    <div className='container'>
        <div className="row">
            <div className="d-flex justify-content-end mangotop">
               <p className='help'>Need help? <a href="home">sales@mango.com</a></p>
               <img src={Vector1} className='vector' alt="" />
               <img src={Vector2} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Topbar