import React from 'react';
import Card1 from '../../src/component/images/ab1.png';
import Card2 from '../../src/component/images/ab2.png';
import Card3 from '../../src/component/images/ab3.png';


function Card() {
    return(
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Card1} alt="" className="img-fluid mb-4"/>
                    </div>

                    <div className="col-md-4">
                        <img src={Card2} alt="" className="img-fluid mb-4"/>
                    </div>

                    <div className="col-md-4">
                        <img src={Card3} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card