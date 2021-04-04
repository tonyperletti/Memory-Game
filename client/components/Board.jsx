/* eslint-disable curly */
/* eslint-disable func-style */
/* eslint-disable quotes */

import React from "react";
import App from "./App.jsx";

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
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

export default Board;
