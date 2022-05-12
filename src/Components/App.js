import React from "react";
import './App.css';
import Display from "./Display";
import Btn from "./Btn";

function App() {
    return (
        <div className="center">
            <h1 >CALCULATOR</h1>
            <div className="main">
                <Display />
                <Btn />
            </div>
        </div>
    );
}
export default App;