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

  componentDidUpdate(prevProps) {
    
    if ((this.props.input !== prevProps.input) || (this.props.selectTo !== prevProps.selectTo)) {
      
      this.setState({display: true})
    
      fetch(`https://api.mymemory.translated.net/get?q=${this.props.input}&langpair=${this.props.selectFrom}|${this.props.selectTo}`)
      .then((response) => response.json())
      .then((data) => this.setState({ translated: data.responseData.translatedText }))
  
    }

  }    

  render() {
    return (
      <div className="Answer">
        {this.state.display && 
        <>
          <section>
            <h2>{this.props.selectFrom}</h2>
            <p>{this.props.input}</p> 
          </section>
          <section>
            <h2>{this.props.selectTo}</h2>
            <p>{this.state.translated}</p> 
          </section>
        </>
        }
      </div>
    )
  }

}


export default Answer;