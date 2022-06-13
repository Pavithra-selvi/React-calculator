import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./ButtonComponent.scss";

// imported component
import Display from "./Display";

//imported image
import github from "../images/github.png";

function App() {
  const [result, setResult] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");

  // Number
  const addToInput = (val) => {
    setResult(result + val);
  };

  // Addition
  const addition = () => {
    setPreviousNumber(result);
    setResult("");
    setOperator("plus");
  };

  // Sub
  const subtract = () => {
    setPreviousNumber(result);
    setResult("");
    setOperator("subtract");
  };

  // Multiplication
  const multiply = () => {
    setPreviousNumber(result);
    setResult("");
    setOperator("multiply");
  };

  // Division
  const divide = () => {
    setPreviousNumber(result);
    setResult("");
    setOperator("divide");
  };

  // clear All
  const clearInput = () => {
    setResult("");
  };
  // backspace
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  // adding zero to input
  const addZeroToInput = (val) => {
    if (val !== "") {
      setResult(result + val);
    }
  };

  // To display the dot once
  const addDecimal = (val) => {
    if (result && result.indexOf(".") === -1) {
      setResult(result + val);
    }
  };

  // Percentage
  const percentage = () => {
    const currentValue = parseFloat(result);

    if (currentValue === 0) return;
    const value =  result;
    const fixedDigits = value && value.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(result) / 100;
    setResult(String(newValue.toFixed(fixedDigits.length + 10)));
  };

  const evaluation = () => {
    const currentNumber = result;
    console.log(previousNumber)
    if (operator === "plus") {
      setResult(parseFloat(previousNumber) + parseFloat(currentNumber));
    } else if (operator === "subtract") {
      setResult(parseFloat(previousNumber) - parseFloat(currentNumber));
    } else if (operator === "multiply") {
      setResult(parseFloat(previousNumber) * parseFloat(currentNumber));
    } else if (operator === "divide") {
      setResult(parseFloat(previousNumber) / parseFloat(currentNumber));
    } else return;
  };

  return (
    <div className="center">
      <h1>
        Calculator
        <span>
          <a
            href="https://github.com/Pavithra-selvi/React-calculator"
            target="_blank"
          >
            <img
              src={github}
              alt="github-image"
              style={{ width: "60px", marginTop: "-10px" }}
            />
          </a>
        </span>
      </h1>
      <div className="main">
        <Display result={result} />

        <div className="button-div">
          <div>
            <Button name="AC" className="button" onClick={clearInput}>
              AC
            </Button>{" "}
            <Button name="%" className="button" onClick={percentage}>
              %
            </Button>{" "}
            <Button name="/" className="button" onClick={divide}>
              /
            </Button>{" "}
            <Button name="C" className="button" onClick={backspace}>
              C
            </Button>{" "}
          </div>

          <div>
            <Button
              name="7"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              7
            </Button>{" "}
            <Button
              name="8"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              8
            </Button>{" "}
            <Button
              name="9"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              9
            </Button>{" "}
            <Button name="*" className="button" onClick={multiply}>
              *
            </Button>{" "}
          </div>

          <div>
            <Button
              name="4"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              4
            </Button>{" "}
            <Button
              name="5"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              5
            </Button>{" "}
            <Button
              name="6"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              6
            </Button>{" "}
            <Button name="-" className="button" onClick={subtract}>
              -
            </Button>{" "}
          </div>

          <div>
            <Button
              name="1"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              1
            </Button>{" "}
            <Button
              name="2"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              2
            </Button>{" "}
            <Button
              name="3"
              className="numberbutton"
              onClick={(e) => addToInput(e.target.name)}
            >
              3
            </Button>{" "}
            <Button name="+" className="button" onClick={addition}>
              +
            </Button>{" "}
          </div>

          <div>
            <Button
              name="0"
              className="numberbutton"
              onClick={(e) => addZeroToInput(e.target.name)}
            >
              0
            </Button>{" "}
            <Button
              name="."
              className="numberbutton"
              onClick={(e) => addDecimal(e.target.name)}
            >
              .
            </Button>{" "}
            <Button name="=" className="button equals" onClick={evaluation}>
              =
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
