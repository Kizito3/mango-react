import React, {useRef} from 'react'
import {FaSearch} from 'react-icons/fa';

function ShowForm() {
    const inputRef = useRef(null);
    const onClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "";
    }

  return (
    <div>
        <input type="search" className="search-input" placeholder='Search for products' ref={inputRef} />
        <FaSearch onClick={onClick} />
    </div>
  )
}

export default ShowForm