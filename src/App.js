
import React, {Component} from "react";
import Answer from "./Answer";
import Question from "./Question";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '', 
      selectFrom: '',
      selectTo: ''
    }
  }

  toTranslate = (data) => {
    this.setState({
      input: data.input, 
      selectFrom: data.selectFrom, 
      selectTo: data.selectTo
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Translator</h1>
        <Question input={this.state.input} sendValue={this.toTranslate}/>      
        <Answer input={this.state.input} selectFrom={this.state.selectFrom} selectTo={this.state.selectTo} />
      </div>
    )
  }

};  

export default App;