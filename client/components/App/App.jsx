/* eslint-disable quotes */
import axios from "axios";
import React from "react";
import Board from "../Board.jsx";
import Timer from "../Timer.jsx";
import Users from "../Users.jsx";
import css from "./app.css";

import styled from "styled-components";

const EntireView = styled.div`
  margin: auto;
  height: 100vh;
  padding-left: 25px;
  background-color: green;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      image: "",
      topTime: "0:00",
      currentUser: "",
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
    console.log(this.state.id);
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
      .post("/users/", {
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
      .get("/users/")
      .then((data) => {
        var users = data.data;
        // console.log(data.data);
        this.setState({
          users: users,
          currentUser: data.data[0].userName,
          currentPic: data.data[0].imageUrl,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <EntireView>
          <div className="players-panel">
            <div className="player">
              <h3>Player 1</h3>
              <p style={{ fontWeight: "bold" }}>{this.state.currentUser}</p>
              <br></br>
              <img src={this.state.currentPic}></img>
            </div>
            <div className="player">
              <h3>Player 2</h3>
              <p style={{ fontWeight: "bold" }}>{this.state.currentUser}</p>
              <br></br>
              <img src={this.state.currentPic}></img>
            </div>
          </div>
          <Board id={this.state.id} />
          {/* <Timer stop={this.initiateTimeStop()} /> */}
          {/* <Users users={this.state.users} /> */}
        </EntireView>
      </div>
    );
  }
}

export default App;
