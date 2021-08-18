
import React, {Component} from "react";
import Answer from "./Answer";
import Question from "./Question";

import './App.css';

class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      input: '', 
      select: '', 
      display: false
    }

  }

  toTranslate = (data) => {

    this.setState({
      input: data.input, 
      select: data.select, 
      display: true
    })

  }

  render() {
    return (
      <div className="App">
        <Question input={this.state.input} sendValue={this.toTranslate}/>      
        {this.state.display &&
          <> 
            <h3>Swedish to {this.state.select}</h3>
            <Answer input={this.state.input} select={this.state.select} />
          </>
        }
      </div>
    )
  }

};  



export default App;