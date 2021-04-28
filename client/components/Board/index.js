/* eslint-disable curly */
/* eslint-disable func-style */
/* eslint-disable quotes */

import React from "react";
import App from "../App";
import css from "./styles.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cards = document.querySelectorAll(".memory-card");

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard;
    let secondCard;

    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
      this.classList.toggle("flip");

      if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
      }
      //second click
      secondCard = this;

      checkForMatch();
    }

    function checkForMatch() {
      let isMatch =
        firstCard.dataset.framework === secondCard.dataset.framework;

      isMatch ? disableCards() : unFlipCards();
    }

    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);

      resetBoard();
    }

    function unFlipCards() {
      lockBoard = true;

      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
      }, 1500);
    }

    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
      cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();

    cards.forEach((card) => card.addEventListener("click", flipCard));

    return (
      <div className="memory-game">
        <div className="memory-card" data-framework="eclipse">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card1.png"
            alt="eclipse"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="eclipse">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card1.png"
            alt="eclipse"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="french-bulldog">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card2.png"
            alt="French Bulldog"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="french-bulldog">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card2.png"
            alt="French Bulldog"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="switzerland">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card5.png"
            alt="Switzerland"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="switzerland">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card5.png"
            alt="Switzerland"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="beach">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card6.png"
            alt="Beach"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="beach">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card6.png"
            alt="Beach"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="cabin">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card7.png"
            alt="Cabin"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="cabin">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card7.png"
            alt="Cabin"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="galaxy">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card8.png"
            alt="Galaxy"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
        <div className="memory-card" data-framework="galaxy">
          <img
            className="front-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/card8.png"
            alt="Galaxy"
          />

          <img
            className="back-face"
            src="https://tonymvp.s3-us-west-2.amazonaws.com/MVP/cardBack.png"
            alt="Card Back"
          />
        </div>
      </div>
    );
  }
}

export default Board;
