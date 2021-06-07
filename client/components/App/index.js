/* eslint-disable quotes */
import axios from "axios";
import React from "react";
import CreatePlayer from "../CreatePlayer";
import Board from "../Board";
import css from "./styles.css";
import ChatBox from "../ChatBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ["tom", "bob"], // ["tom", "bob"],
      name: "",
      image: "",
      currentPlayer: "me", //////// HARD CODED FIX THIS!!!!!
      currentPic: "",
      id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initiateTimeStop = this.initiateTimeStop.bind(this);
    this.increaseId = this.increaseId.bind(this);
  }

  initiateTimeStop() {}

  increaseId() {
    var count = this.state.id;
    this.setState({
      id: count++,
    });
    // console.log(this.state.id);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // increaseId();
    axios
      .post("/players", {
        id: this.state.id,
        userName: this.state.name,
        imageUrl: this.state.image,
        topTime: this.state.topTime,
      })
      .then(() => {
        console.log("Submitted");
        increaseId();
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    axios
      .get("/players/")
      .then((data) => {
        var players = data.data;
        this.setState({
          players: players,
          currentPlayer: players[0].userName,
          currentPic: players[0].imageUrl,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    if (!this.state.currentPlayer) {
      return (
        <div>
          <CreatePlayer />
        </div>
      );
    } else {
      return (
        <div className="main-view">
          <div className="game-title">MEMORY GAME</div>
          <div className="game-container">
            <div className="board">
              <Board id={this.state.id} />
            </div>
            <div className="players-container">
              <div className="player">
                {/* <div className="word-bubble"></div> */}
                <img id="player1" src={this.state.currentPic}></img>
                <p className="player-name">{this.state.currentPlayer}</p>
              </div>

              <div className="player">
                {/* <div className="word-bubble"></div> */}
                <img id="player2" src={this.state.currentPic}></img>
                <p className="player-name">{this.state.currentPlayer}</p>
              </div>
            </div>
          </div>
          <div className="chatBox">
            <ChatBox name={this.state.name} />
          </div>
        </div>
      );
    }
  }
}

export default App;
