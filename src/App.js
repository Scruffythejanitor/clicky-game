import React, { Component } from "react";
import CardDisplay from "./components/card-display";
import cast from "./futurama-cast.json";
import Header from "./components/header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      cast,
      highScore: 0,
    };
  }
  clickHandle = (id) => {
    let shuffle = this.state.cast.map((cast) => {
      if (cast.id === id) {
        if (cast.clicked === false) {
          this.updateScore();
          if (this.state.score >= this.state.highScore) {
            this.updateHighScore();
            if (this.state.highScore === this.state.cast.length) {
              this.winGame();
            }
          }
          cast.clicked = true;
        } else {
          this.restartGame();
        }
      }
      return cast;
    });
    this.shuffleCards(shuffle);
    console.log(shuffle);
    this.setState({ cast: shuffle });
  };

  shuffleCards = (newInfo) => {
    newInfo.sort(() => Math.random() - 0.5);
  };

  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  updateHighScore = () => {
    this.setState({ highScore: this.state.highScore + 1 });
  };

  winGame = () => {
    alert("You've won");
    this.setState({ highScore: 0 });
    this.restartGame();
  };
  restartGame = () => {
    this.setState({ score: 0 });
    let resetInfo = this.state.cast.map((cast) => {
      cast.clicked = false;
      return cast;
    });
    this.setState({ cast: resetInfo });
  };
  render() {
    return (
      <div>
        <Header score={this.state.score} highScore={this.state.highScore} />

        <CardDisplay cast={this.state.cast} onClick={this.clickHandle} />
       
      </div>
    );
  }
}

export default App;
