import React, { Component } from "react";
import axios from "axios";
import CreatePlayer from "../CreatePlayer";

var socket;

class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      name: "TONY", /// HARDCODED
      messages: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.dropDatabase = this.dropDatabase.bind(this);
  }

  getMessage() {
    axios
      .get("/messages")
      .then((data) => {
        var messagesObj = data.data;
        let messagesArr = [];
        for (const key in messagesObj) {
          messagesArr.push(messagesObj[key].message);
        }
        this.setState({
          messages: messagesArr,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const message = target.name;
    this.setState({
      [message]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/messages", {
        userName: this.state.name,
        message: this.state.message,
      })
      .then(() => {
        ///// RESET TEXT FIELD IN FORM AFTER SUBMIT //////
        document.getElementById("form").reset();
      })
      .then(() => {
        this.getMessage();
      })
      .catch((error) => console.log(error));
  }

  dropDatabase() {
    axios
      .delete("/messages", { data: {} })
      .then(() => {
        this.setState({
          messages: [],
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="chat-border">
          <ul id="messages">Chat</ul>
          <form id="form" action="">
            <input
              id="input"
              type="text"
              name="message"
              onChange={this.handleChange}
              autoComplete="off"
            />
            <button onClick={this.handleSubmit}>Send</button>
          </form>
          {this.state.messages.map((message, i) => (
            <h3 key={i}>{message}</h3>
          ))}
        </div>
        <button id="drop" onClick={this.dropDatabase}>
          Delete Chat History
        </button>
      </div>
    );
  }
}

export default ChatBox;
