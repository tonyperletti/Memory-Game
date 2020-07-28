import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      minutes: 0,
      seconds: 0
    };
    this.getTime = this.getTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
  }

  stopTime() {
    var currentTime = `${this.state.minutes}:${this.state.seconds}`;
    this.setState({
      time: currentTime
    });
    this.getTime();
  }

  getTime() {

    alert(`Your Time Was: ${this.state.time}`);
    return this.state.time;
  }

  componentDidMount() {
    var myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds < 60) {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1
        }));
      }
      if (seconds === 59) {
        clearInterval(this.myInterval);
        this.setState(({ minutes }) => ({
          minutes: minutes + 1,
          seconds: 0
        }));
        myInterval();
      }
    }, 1000);
  }

  render () {
    const { minutes, seconds } = this.state;

    return (
      <div>
        <h3 time={this.state.time} >{ minutes }:{ seconds < 10 ? `0${ seconds}` : seconds }</h3>
      </div>
    );
  }
}