import React, {Component} from "react";
import "./Answer.css"

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      translated: this.props.input,
      display: false
    }
  }


  componentDidUpdate(prevProps, prevState) {

    if ((this.props.input !== prevProps.input) || (this.props.select !== prevProps.select)) {
      this.setState({display:true})
      if(this.props.input === "") {
        this.setState({translated: "You must enter a word or sentence"})
      } else {
        fetch(`https://api.mymemory.translated.net/get?q=${this.props.input}&langpair=sv|${this.props.select}`)
        .then((response) => response.json())
        .then((data) => this.setState({ translated: data.responseData.translatedText }))
      }
      
    }
  }    


  

  render() {
    return (
      <div className="Answer">
        {this.state.display && 
        <>
          <p>{this.state.translated}</p> 
          <p>{this.props.input}</p> 
        </>
        }
      </div>
    )
  }

}


export default Answer;