import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import socketIO from "socket.io-client";

var socket;

class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:3001",
    };
    socket = socketIOClient(this.state.endpoint);
  }

  render() {
    return (
      <div>
        <ul id="messages">Chat</ul>
        <form id="form" action="">
          <input id="input" autoComplete="off" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatBox;
