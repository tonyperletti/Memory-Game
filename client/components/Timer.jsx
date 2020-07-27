import React, { Component } from 'react';
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0
    };
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
        <h3>{ minutes }:{ seconds < 10 ? `0${ seconds}` : seconds }</h3>
      </div>
    );
  }
}