import React, {Fragment} from 'react';
import App from './App.jsx';
import axios from 'axios';
import styled from 'styled-components';

// REACT STYLED COMPONENTS

const Main = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-columns: 2fr 1fr 25%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 35px;
`;

const Image = styled.img`
  // object-fit: cover;
  border-radius: 5px;
  // overflow: hidden;
`;

// const Background = styled.img`
//   border-radius: 5px;
//   // display: none;
//   // visibility: hidden;
// `;

// CLASS COMPONENT

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      view:
      [
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card1.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card2.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card3.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card4.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card5.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card6.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card7.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card8.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card1.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card2.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card3.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card4.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card5.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card6.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card7.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card8.png'
      ],

      back: 'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',

      cards: [
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
        'https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png',
      ],
      cardMatch: '',
      topTime: '6:45pm',
      currentUser: 'Tony'
    };
    this.shuffle = this.shuffle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stopGame = this.stopGame.bind(this);
  }

  stopGame() {
    var time = this.state.topTime;
    console.log(time);
    axios.put('/users/', {
      userName: this.state.currentUser,
      topTime: time
    })
      .then(res => {
        console.log('made a put request');
      })
      .catch(err => {
        console.log(err);
      });

  }

  handleClick(cardIndex) {
    var count = this.state.counter;

    // remove cards when there's a match
    var updated2 = this.state.cards;

    var removeCards = function(view) {
      // console.log('here');
      for (var i = 0; i < updated2.length; i++) {
        if (view === updated2[i]) {
          console.log('match');
          updated2[i] = '';
        }
      }
      console.log('removed');
      // if (updated2 === ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']) {
      //   console.log('Winner!');
      // }
      return updated2;
      // this.setState({
      //   cards: updated2
      // });
    };
    var currentCard = this.state.view[cardIndex];
    if (currentCard === this.state.cardMatch && this.state.counter === 2) {
      var updated3 = removeCards(currentCard);
      // console.log(JSON.stringify(updated3));
      if (JSON.stringify(updated3) === JSON.stringify(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])) {
        console.log('WINNER!');
        this.stopGame();
      }
      this.setState({
        cardMatch: '',
        cards: updated3
      });
    } else {
      this.setState({
        cardMatch: currentCard,
        counter: count++
      });
    }

    // reset cards after incorrect guess
    if (this.state.counter === 2) {
      var back = this.state.back;
      var cards = this.state.cards;
      var reset = function(back, cards) {
        for (var i = 0; i < cards.length; i++) {
          if (cards[i] !== '') {
            cards[i] = back;
          }
        }
        return cards;
      };
      var resetCards = reset(back, cards);
      this.setState({
        cards: resetCards,
        counter: 0
      });
    } else {
      // updated cards for first 2 guesses
      var updated = this.state.cards;
      var faces = this.state.view;
      var updateArr = function(cardIndex) {
        for (var i = 0; i < updated.length; i++) {
          if (i === cardIndex) {
            updated[i] = faces[i];
          }
        }
      };
      updateArr(cardIndex);
      this.setState({
        cards: updated,
        counter: count++
      });
    }
  }

  shuffle(a) {
    var j;
    var x;
    var i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  componentDidMount() {
    var shuffled = this.shuffle(this.state.view);
    this.setState({
      view: shuffled
    });
  }

  render() {
    return (
      <div>
        <Main stop={this.stopGame} className="grid">
          <Image src={this.state.cards[0]} onClick={() => { this.handleClick(0); }}></Image>
          <Image src={this.state.cards[1]} onClick={() => { this.handleClick(1); }}></Image>
          <Image src={this.state.cards[2]} onClick={() => { this.handleClick(2); }}></Image>
          <Image src={this.state.cards[3]} onClick={() => { this.handleClick(3); }}></Image>
          <Image src={this.state.cards[4]} onClick={() => { this.handleClick(4); }}></Image>
          <Image src={this.state.cards[5]} onClick={() => { this.handleClick(5); }}></Image>
          <Image src={this.state.cards[6]} onClick={() => { this.handleClick(6); }}></Image>
          <Image src={this.state.cards[7]} onClick={() => { this.handleClick(7); }}></Image>
          <Image src={this.state.cards[8]} onClick={() => { this.handleClick(8); }}></Image>
          <Image src={this.state.cards[9]} onClick={() => { this.handleClick(9); }}></Image>
          <Image src={this.state.cards[10]} onClick={() => { this.handleClick(10); }}></Image>
          <Image src={this.state.cards[11]} onClick={() => { this.handleClick(11); }}></Image>
          <Image src={this.state.cards[12]} onClick={() => { this.handleClick(12); }}></Image>
          <Image src={this.state.cards[13]} onClick={() => { this.handleClick(13); }}></Image>
          <Image src={this.state.cards[14]} onClick={() => { this.handleClick(14); }}></Image>
          <Image src={this.state.cards[15]} onClick={() => { this.handleClick(15); }}></Image>
        </Main>
      </div>

    );
  }
}

export default GameBoard;