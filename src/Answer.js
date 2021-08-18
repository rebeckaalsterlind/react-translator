import React, {Component} from "react";
import "./Answer.css"

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      translate: this.props.input, 
      language: this.props.select
    }
  }

  componentDidMount = () => {
    console.log('in didmount state translate:', this.state.translate);
    
    fetch(`https://api.mymemory.translated.net/get?q=${this.state.translate}&langpair=sv|${this.state.language}`)
    .then((response) => response.json())
    .then((data) => this.setState({translate: data.responseData.translatedText}))

  }

  render() {
    return <p className="Answer">{this.state.translate}</p>
  }

}


export default Answer;