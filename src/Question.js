import React, {Component} from "react";
import "./Question.css";

class Question extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input, 
      selectFrom: 'sv',
      selectTo: 'en'}
  }

  handleChange = (evt) => this.setState({input: evt.target.value})

  handleFrom = (evt) => this.setState({selectFrom: evt.target.value})

  handleTo = (evt) => this.setState({selectTo: evt.target.value})

  handleSubmit = (evt) => {

    evt.preventDefault();
    this.props.sendValue({
      input: this.state.input, 
      selectFrom: this.state.selectFrom, 
      selectTo: this.state.selectTo
    })

    document.getElementById("input").value = "";
    this.setState({input: ''})

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="Question">
        <select name="from" onChange={this.handleFrom}>
          <option value="se">Swedish</option> 
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
        </select>
        <label> to </label>
        <select i name="to" onChange={this.handleTo}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
          <option value="se">Swedish</option>
        </select><br ></br> 
        <input type="text" id="input" placeholder="..." required onChange={this.handleChange} /> 
        <button type="submit" >Translate</button>
      </form>
    )
  }

};  



export default Question;