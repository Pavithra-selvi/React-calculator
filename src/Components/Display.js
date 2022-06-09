import React from 'react';
import './Display.css';
const Display = (props) => {
    
    return (    
        <div >
           <input type="text" value= {props.result} className='display' readOnly /> 
        </div>
    );
}
export default Display;