import React from 'react'
import Ab4 from '../../src/component/images/ab4.png';
import Card from './Card';

function About() {
  return (
    <div>
      <div className="container-fluid about-hero">
        <div className="container">
        <div className="row">
          <div className="col-md-6 hero-spacing">
            <h4>We Help To Get Solutions</h4>

            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </p>

            <button className="abt-btn">our team</button>
          </div>
            <div className="col-md-6 abt-image">
              <div>
                <img src={Ab4} alt="" className="img-fluid" />
              </div>
            </div>
        </div>
        </div>
      </div>

      <div className="container sec-abt">
        <div className="row">
          <div className="col-md-6">
            <h4>Constant innovation</h4>
            <p> Throughout our four decades of existence, at Mango we have evolved in step with society and fashion. We are pioneers of fashion e-commerce in Europe and we use technology as a means of bringing fashion closer to all our customers</p>
          </div>

          <div className="col-md-6 mt-5">
            <p> Throughout our four decades of existence, at Mango we have evolved in step with society and fashion. We are pioneers of fashion e-commerce in Europe and we use technology as a means of bringing fashion closer to all our customers</p>
          </div>
        </div>
      </div>

      <div className="container third-abt">
        <div className="row">
          <div className="col-md-12">
          <h4>SHOPPERS MESSIAH</h4>

          <p>Today buying the right fashion products as seen online could be annoying, expensive, time consuming & even misleading at times!… Yes that type of disappointment
          MANGO exists to give you an all exciting & transparent shopping experience, we will handle all your needs carefully from ordering to delivery.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
          <h4>SHOPPING CATEGORIES</h4>
          <p>To make sure you can find what you are looking to shop, we sell our products on several categories like;</p>
          </div>
        </div>
      </div>
      <Card />
    </div>
  )
}

export default About