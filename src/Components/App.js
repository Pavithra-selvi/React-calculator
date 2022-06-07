import React, { useState ,Component} from "react";
import './App.css';
import Display from "./Display";
import Btn from "./ButtonComponent";

class App extends Component{
    
    state = {
        result: ""
      }

  
      onClick = button => {
        if(button === "=") {
          this.calculate();
        }
    
        else if(button === "AC") {
          this.reset();
        }
    
        else if(button === "⌫") {
          this.backspace();
        }
    
        else {
          this.setState({
            result: this.state.result + button
          })
        }
      };
    
      calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')) {
          checkResult = this.state.result.replace('--', '-')
        }
        else if(this.state.result.includes('++')) {
          checkResult = this.state.result.replace('++', '+')
        }
        else if(this.state.result.includes('**')) {
            checkResult = this.state.result.replace('**', '*')
          }
          else if(this.state.result.includes('//')) {
            checkResult = this.state.result.replace('//', '/')
          }
         else {
          checkResult = this.state.result;
        }
    
        try {
          this.setState({
            result: (eval(checkResult) || "") + ""
          })
        } catch(e) {
          this.setState({
            result: "error"
          })
        }
      };
    
      reset = () => {
        this.setState({
          result: ""
        })
      };
    
      backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
      };
  render(){
    return (
        <div className="center">
            <h1 >CALCULATOR</h1>
            <div className="main">
                <Display result={this.state.result} />
                <Btn onClick={this.onClick}/>
            </div>
        </div>
    );
  }
}
export default App;