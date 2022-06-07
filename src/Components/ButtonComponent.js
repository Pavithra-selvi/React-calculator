import React,{Component}from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonComponent.css';



class Btn extends Component {

  render(){
    return (
        <div className='button-div'>
            <div>
                <Button name="AC" className='button' onClick={e =>this.props.onClick(e.target.name)} >AC</Button>{' '}
                <Button name="AC" className='button' onClick={e => this.props.onClick(e.target.name)} >%</Button>{' '}
                <Button name="/" className='button' onClick={e => this.props.onClick(e.target.name)}>/</Button>{' '}
                <Button name="⌫" className='button' onClick={e =>this. props.onClick(e.target.name)} >⌫</Button>{' '}
            </div>

            <div>
                <Button name="7" className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >7</Button>{' '}
                <Button name="8" className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >8</Button>{' '}
                <Button name="9" className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >9</Button>{' '}
                <Button name="*" className='button' onClick={e =>this.props.onClick(e.target.name)} >*</Button>{' '}
            </div>

            <div>
                <Button name="4" className='numberbutton' onClick={e => this.props.onClick(e.target.name)}>4</Button>{' '}
                <Button name="5" className='numberbutton' onClick={e => this.props.onClick(e.target.name)} >5</Button>{' '}
                <Button name="6" className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >6</Button>{' '}
                <Button name="-" className='button' onClick={e => this.props.onClick(e.target.name)}>-</Button>{' '}
            </div>

            <div>
                <Button name="1" className='numberbutton' onClick={e => this.props.onClick(e.target.name)}>1</Button>{' '}
                <Button name="2" className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >2</Button>{' '}
                <Button name="3" className='numberbutton' onClick={e => this.props.onClick(e.target.name)}>3</Button>{' '}
                <Button name="+" className='button' onClick={e => this.props.onClick(e.target.name)}>+</Button>{' '}
            </div>

            <div>
                <Button name="0" className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >0</Button>{' '}
                <Button name="." className='numberbutton' onClick={e =>this. props.onClick(e.target.name)} >.</Button>{' '}
                <Button name="=" className='button equals' onClick={e =>this. props.onClick(e.target.name)} >=</Button>{' '}
            </div>

        </div>

    );
  }
}
export default Btn;