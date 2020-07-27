import React, {Fragment} from 'react';
import App from './App.jsx';
import styled from 'styled-components';

// STYLED COMPONENTS

const Main = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(4, 1fr);
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
    };
    this.shuffle = this.shuffle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.cardSource = this.cardSource.bind(this);
  }

  cardSource() {

  }

  handleClick(cardIndex) {
    console.log(cardIndex);
    var updated = this.state.cards;
    var faces = this.state.view;
    // console.log(updated.length);
    var updateArr = function(cardIndex) {
      for (var i = 0; i < updated.length; i++) {
        if (i === cardIndex) {
          updated[i] = faces[i];
        }
      }
    };
    updateArr(cardIndex);
    this.setState({
      cards: updated
    });
    console.log(updated);
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
        <Main className="grid">
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