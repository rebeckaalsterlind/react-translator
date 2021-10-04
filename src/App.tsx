
import React, {Component} from "react";
import Answer from "./Answer";
import Question from "./Question";
import './App.css';

interface State {
  input: string, 
  selectFrom: string,
  selectTo: string
}

class App extends Component<{}, State> {

  state = {
    input: '', 
    selectFrom: '',
    selectTo: ''
  }

  toTranslate = (data:any) => {
    this.setState({
      input: data.input, 
      selectFrom: data.selectFrom, 
      selectTo: data.selectTo
    });
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