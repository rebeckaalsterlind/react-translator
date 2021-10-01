import React, {Component} from "react";
import "./Question.css";

interface Props {
  input: string,
  sendValue(State: Object):void
}

interface State {
  input: string,
  selectFrom: string, 
  selectTo: string
}

class Question extends Component <Props, State> {
  
  state = {
    input: this.props.input, 
    selectFrom: 'sv',
    selectTo: 'en'
  }

  handleSubmit = (evt: React.FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    this.props.sendValue(this.state);
    this.setState({input: ''})
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="Question">
        <select name="from" value={this.state.selectFrom} onChange={ evt => this.setState({selectFrom: evt.target.value})}>
          <option value="sv">Swedish</option> 
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
        </select>
        <label> to </label>
        <select name="to" value={this.state.selectTo} onChange={ evt => this.setState({selectTo: evt.target.value})}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
          <option value="sv">Swedish</option>
        </select><br ></br> 
        <input type="text" value={this.state.input} placeholder="..." required onChange={evt => this.setState({input: evt.target.value})} /> 
        <button type="submit" >Translate</button>
      </form>
    )
  }

};  



export default Question;