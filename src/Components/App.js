import React, { useState } from "react";
import './App.css';
import Display from "./Display";
import Btn from "./ButtonComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import github from '../images/github.png';

function App() {

    const [result, setResult] = useState('');

    const onClick = (button) => {
        if (button === "=") {
            calculate();
        }

        else if (button === "AC") {
            reset();
        }

        else if (button === "⌫") {
            backspace();
        }

        else {
            setResult(result + button)
        }
    };

    const calculate = () => {
        let checkResult = ''
        if (result.includes('--')) {
            checkResult = result.replace('--', '-')
        }
        else if (result.includes('++')) {
            checkResult = result.replace('++', '+')
        }
        else if (result.includes('**')) {
            checkResult = result.replace('**', '*')
        }
        else if (result.includes('//')) {
            checkResult = result.replace('//', '/')
        }
        else {
            checkResult = result;
        }

        try {
            setResult((eval(checkResult) || "0"))
        } catch (e) {
            setResult("Error")
        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {
        setResult(result.slice(0, -1))
    };

    return (
        <div className="center">
            <h1 >Calculator <span ><a href="https://github.com/Pavithra-selvi/React-calculator.git">
                <img src={github} alt="github-image" style={{ width: "60px", marginTop: "-10px" }}></img>
            </a></span>
            </h1>
            <div className="main">
                <Display result={result} />
                <Btn onClick={onClick} />
            </div>
            {/* <div className="fixed-top" >
                   <a href="https://github.com/Pavithra-selvi/React-calculator.git" >                  
                        <button type="button" class="btn btn-primary">
                        Github
                    </button>
                    </a>
            </div> */}
        </div>

    );

}
export default App;