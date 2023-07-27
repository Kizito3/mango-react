import React from 'react'
import {BsChevronDown,BsChevronRight } from 'react-icons/bs';

function Next() {
  return (
    <div>
        <div 
          className="container d-flex justify-content-center gap-4 mb-5 mt-4">
            <div 
             className="row">
                <div 
                 className="col-md-12 no1">
                    <span>1 
                        <BsChevronDown className='icon-arrow'/>
                    </span> 
                </div>
            </div>
            <span className='mt-2'>of 3 <BsChevronRight /></span>
        </div>
    </div>
  )
}

export default Next