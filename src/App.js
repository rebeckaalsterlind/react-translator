
import React, {Component} from "react";
import Answer from "./Answer";
import Question from "./Question";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', display: false}
  }

  toTranslate = (inputText) => {
    console.log('callback', inputText);
    this.setState({value: inputText, display: true})
  }

  render() {
    return (
      <div className="App">
        <Question value={this.state.value} sendValue={this.toTranslate}/>      
        {this.state.display && <Answer toTranslate={this.state.value} />}
      </div>
    )
  }

};  



export default App;