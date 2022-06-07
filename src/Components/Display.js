import React from 'react';
import './Display.css';
const Display = (props) => {
    return (
        <div className='display' >
            <p style={{ height: "40px" }}>{props.result}</p>
        </div>

    );

}
export default Display;