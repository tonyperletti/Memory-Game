import axios from 'axios';
import React from 'react';
import GameBoard from './GameBoard.jsx';
import Timer from './Timer.jsx';
import Users from './Users.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      topTime: '',
      currentUser: '',
      currentPic: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // console.log(this.state.name);
  }

  handleSubmit(event) {
    // console.log(this.state.name);
    axios.post('/users/', {
      userName: this.state.name,
      imageUrl: this.state.image
      // implement topTime in another axios.post function
    })
      .then(() => {
        console.log('post submitted');
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    axios.get('/users/')
      .then((data) => {
        // console.log(data.data[0].imageUrl);
        this.setState({
          currentUser: data.data[0].userName,
          currentPic: data.data[0].imageUrl
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        <div className="user-form">
          <h3>Enter Your Information</h3>
          <form>
            <label>Name</label>
            <input className="name-input" type="text" name="name" onChange={this.handleChange}></input>
            <label>Profile Picture</label>
            <input className="image-input" type="text" name="image" onChange={this.handleChange}></input>
            <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
        <div className ="current-user">
          <h3>Current Player</h3>
          <p>{this.state.currentUser}</p><br></br>
          <img src={this.state.currentPic}></img>
        </div>
        <GameBoard /><br></br>
        <Timer />
        <Users />

      </div>
    );
  }
}

export default App;
