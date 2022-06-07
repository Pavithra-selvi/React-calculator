import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonComponent.css';



const Btn = (props) => {

const handleFunction = (e) => {
    props.onClick(e.target.name)
}
    return (
        <div className='button-div'>
            <div>
                <Button name="AC" className='button' onClick={e => handleFunction(e)}>AC</Button>{' '}
                <Button name="AC" className='button' onClick={e => handleFunction(e)}>%</Button>{' '}
                <Button name="/" className='button' onClick={e => handleFunction(e)}>/</Button>{' '}
                <Button name="⌫" className='button' onClick={e => handleFunction(e)}>⌫</Button>{' '}
            </div>

            <div>
                <Button name="7" className='numberbutton' onClick={e => handleFunction(e)}>7</Button>{' '}
                <Button name="8" className='numberbutton' onClick={e => handleFunction(e)}>8</Button>{' '}
                <Button name="9" className='numberbutton' onClick={e => handleFunction(e)}>9</Button>{' '}
                <Button name="*" className='button' onClick={e =>handleFunction(e)}>*</Button>{' '}
            </div>

            <div>
                <Button name="4" className='numberbutton' onClick={e => handleFunction(e)}>4</Button>{' '}
                <Button name="5" className='numberbutton' onClick={e => handleFunction(e)}>5</Button>{' '}
                <Button name="6" className='numberbutton' onClick={e => handleFunction(e)}>6</Button>{' '}
                <Button name="-" className='button' onClick={e => handleFunction(e)}>-</Button>{' '}
            </div>

            <div>
                <Button name="1" className='numberbutton' onClick={e =>handleFunction(e)}>1</Button>{' '}
                <Button name="2" className='numberbutton' onClick={e => handleFunction(e)} >2</Button>{' '}
                <Button name="3" className='numberbutton' onClick={e => handleFunction(e)}>3</Button>{' '}
                <Button name="+" className='button' onClick={e => handleFunction(e)}>+</Button>{' '}
            </div>

            <div>
                <Button name="0" className='numberbutton' onClick={e => handleFunction(e)}>0</Button>{' '}
                <Button name="." className='numberbutton' onClick={e => handleFunction(e)}>.</Button>{' '}
                <Button name="=" className='button equals' onClick={e => handleFunction(e)}>=</Button>{' '}
            </div>

        </div>

    );
    
  
}
export default Btn;