import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Btn.css';



function Btn() {
    return (
        <div className='button-div'>
            <div>
            <Button variant="danger" className='button'>AC</Button>{' '}
            <Button variant="secondary" className='button'>%</Button>{' '}
            <Button variant="secondary" className='button'>/</Button>{' '}
            <Button variant="secondary" className='button'>⌫</Button>{' '}       
            </div>

            <div>
            <Button variant="primary" className='button'>7</Button>{' '}
            <Button variant="primary" className='button'>8</Button>{' '}
            <Button variant="primary" className='button'>9</Button>{' '}
            <Button variant="secondary" className='button'>*</Button>{' '}       
            </div>

            <div>
            <Button variant="primary" className='button'>4</Button>{' '}
            <Button variant="primary" className='button'>5</Button>{' '}
            <Button variant="primary" className='button'>6</Button>{' '}
            <Button variant="secondary" className='button'>-</Button>{' '}       
            </div>

            <div>
            <Button variant="primary" className='button'>1</Button>{' '}
            <Button variant="primary" className='button'>2</Button>{' '}
            <Button variant="primary" className='button'>3</Button>{' '}
            <Button variant="secondary" className='button'>+</Button>{' '}       
            </div>

            <div>
            <Button variant="primary" className='button'>0</Button>{' '}
            <Button variant="primary" className='button'>.</Button>{' '}
            <Button variant="success" className='button equals'>=</Button>{' '}     
            </div>

        </div>

    );
}
export default Btn;