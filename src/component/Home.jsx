import React from 'react'
// import Sensual from '../../src/component/images/sensual.png';
import Hero from '../../src/component/images/hero1.png';
import '../../src/component/Main.css';
import Body from './Body';
function Home() {
  return (
    <div>
      <div>
        <div>
          <div className="display">
            <img src={Hero} alt="sensual" className="img-fluid" />
          </div>
        </div>
      </div>

      <Body />
    
    </div>
   
  )
}

export default Home