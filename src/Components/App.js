import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// imported components

import Display from "./Display";
import Btn from "./ButtonComponent";

//imported image

import github from "../images/github.png";

function App() {
  const [result, setResult] = useState("");
//   const [waiting,setWaiting] = useState(false);

//   useEffect(() => {
//     document.addEventListener("keydown", onClick);
//   }, []);

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "AC") {
      reset();
    } else if (button === "C") {
      backspace();
    } else if (button === "%") {
      inputPercent();
     } 
    //   else if (button === ".") {
    //     inputDot();
    //  } 
     else {
      setResult(result + button);
    }
  };

  const inputPercent = () => {
    const currentValue = parseFloat(result);

    if (currentValue === 0) return;

    const fixedDigits = result.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(result) / 100;
    setResult(String(newValue.toFixed(fixedDigits.length + 10)));
  };

//   const inputDot = () =>{
//     if (!(/\./).test(result)) {
//       setResult({value: result + '.',  waiting: false}
//        )}
//   };

  const calculate = () => {
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "-");
    } else if (result.includes("++")) {
      checkResult = result.replace("++", "+");
    } else if (result.includes("**")) {
      checkResult = result.replace("**", "*");
    } else if (result.includes("//")) {
      checkResult = result.replace("//", "/");
    } else {
      checkResult = result;
    }

    try {
      setResult(eval(checkResult) || "0");
    } catch (e) {
      setResult("Error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
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
        <Btn onClick={onClick} />
      </div>
    </div>
  );
}
export default App;
