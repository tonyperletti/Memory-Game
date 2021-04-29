/* eslint-disable quotes */
import axios from "axios";
import React from "react";
import CreatePlayer from "../CreatePlayer";
import Board from "../Board";
import Player from "../Player";
import css from "./styles.css";
import ChatBox from "../ChatBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ["tom", "bob"],
      name: "",
      image: "",
      currentPlayer: "", //////// HARD CODED FIX THIS!!!!!
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
        // console.log(data);
        var players = data.data;
        // console.log(players);
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
          <div className="players-panel">
            <div className="player-container">
              <div className="player">
                <h3>Player 1</h3>
                <p style={{ fontWeight: "bold" }}>{this.state.currentPlayer}</p>
                <br></br>
                <img src={this.state.currentPic}></img>
              </div>
            </div>
            <div className="player-container">
              <div className="player">
                <h3>Player 2</h3>
                <p style={{ fontWeight: "bold" }}>{this.state.currentPlayer}</p>
                <br></br>
                <img src={this.state.currentPic}></img>
              </div>
            </div>
          </div>
          <ChatBox />
          <Board id={this.state.id} />
        </div>
      );
    }
  }
}

export default App;
