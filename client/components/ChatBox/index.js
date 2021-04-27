import React, { Component } from "react";
import axios from "axios";

var socket;

class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      name1: true, /// HARDCODED
      name2: false, /// HARDCODED
      messages: ["Hey", "what"],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    axios
      .get("/chatBox/")
      .then((data) => {
        var message = data.data[0].message;
        console.log(data.data[0].message);
        this.setState({
          messages: this.state.messages.push(message),
        });
        console.log(this.state.messages);
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
    axios
      .post("/chatBox", {
        // userName1: this.state.name1,
        // userName2: this.state.name2,
        message: this.state.message,
      })
      // .then(() => {
      //   console.log("Message Submitted");
      //   this.getMessage();
      // })
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
      </div>
    );
  }
}

export default ChatBox;
