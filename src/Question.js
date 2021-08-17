import React, {Component} from "react";
import Answer from "./Answer";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value}
  }

  handleChange = (evt) => {
    this.setState({value: evt.target.value})
  }

  // componentDidMount() {
  //   fetch(`https://api.mymemory.translated.net/get?q=${this.state.message}&langpair=en|it`)
  //   .then((response) => response.json())
  //   .then(function(data){
  //     this.setState({display: data.responseData.translatedText});
  //   })

  // }
    
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.sendValue(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" placeholder="Sentence.." value={this.state.value} onChange={this.handleChange} />
        <button type="submit" >Translate</button>
      </form>
    )
  }

};  



export default Question;