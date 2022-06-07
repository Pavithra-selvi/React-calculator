import React, { useState } from "react";
import './App.css';
import Display from "./Display";
import Btn from "./ButtonComponent";

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
            <h1 >CALCULATOR</h1>
            <div className="main">
                <Display result={result} />
                <Btn onClick={onClick} />
            </div>
        </div>
    );

}
export default App;