import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    likes: 0,
    word: 'likes'
  }

  handleClick = (e) => {
    this.setState({
      likes: this.state.likes +1,
    })
    // solved counting error problem by +1
    if (this.state.likes +1 === 1) {
      this.setState({
        word: 'like'

      })

    } else {
      this.setState({
        word: 'likes'
      })
    }
  }
  render() {
    return (
      <div className="button">
        <button id="butt" onClick = {this.handleClick}>{this.state.likes} {this.state.word}</button>

      </div>
    );
  }
}

export default App;
