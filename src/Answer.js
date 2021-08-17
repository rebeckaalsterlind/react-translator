import React, {Component} from "react";
import "./Answer.css"

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = {translate: this.props.toTranslate}
  }

  componentDidMount = () => {
    console.log('in didmount state translate', this.state.translate);
    
    fetch(`https://type.fit/api/quotes`)
    .then((response) => response.json())
    .then((data) => {

      console.log('data', data[300].text);
      this.setState({translate: data[300].text});

    })

  }

  render() {
    return (
      <>
        <p className="Answer">{this.state.translate}</p>
      </>
      
    )
  }

}


export default Answer;