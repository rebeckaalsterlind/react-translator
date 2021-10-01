import React, {Component} from "react";
import "./Answer.css"

interface Props {
  input: string,
  selectTo: string,
  selectFrom: string
}

interface State {
  translated: string,
  display: boolean
}

class Answer extends Component<Props, State> {

    state = { 
      translated: this.props.input,
      display: false
    }


  componentDidUpdate(prevProps:any) {

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



