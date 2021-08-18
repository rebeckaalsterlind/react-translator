import React, {Component} from "react";
import Answer from "./Answer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {input: this.props.input, select: 'en'}
  }

  handleChange = (evt) => {
    this.setState({input: evt.target.value})
  }

  handleSelect = (evt) => {
    this.setState({select: evt.target.value})
  }
    
    
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.sendValue({input: this.state.input, select: this.state.select})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" placeholder="Sentence.." value={this.state.input} onChange={this.handleChange} /> <br />
        <span>Translate to:</span>
        <select id="language" name="language" onChange={this.handleSelect}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select><br ></br>
        <button type="submit" >Translate</button>
      </form>
    )
  }

};  



export default Question;