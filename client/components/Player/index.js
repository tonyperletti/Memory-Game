/* eslint-disable quotes */
import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";

// STYLED COMPONENTS

const Container = styled.div`
  display: flex;
  margin-right: 100px;
`;

const Block = styled.div`
  display: grid;
  margin: 25px;
  position: center;
`;

const Individual = styled.div`
  margin: auto;
  padding: 5% 36%;
  border: solid;
  border-radius: 25px;
  background-color: silver;
`;

const Picture = styled.img`
  width: 50%;
  height: 15px%;
`;

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var name = event.target.className;
    axios
      .delete("/players", { data: { userName: name } })
      .then(() => {
        console.log("Player deleted");
        componentDidMount();
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Container>
          {/* {this.props.users.map((user, i) => (
            <Fragment key={i}>
              <Block>
                <Individual>{user.userName}</Individual>
                <br></br>
                <Picture src={user.imageUrl}></Picture>
                <button className={user.userName} onClick={this.handleClick}>
                  Delete User
                </button>
              </Block>
            </Fragment>
          ))} */}
          <div>
            <p>
              Use this Component to delete players from database at the end of
              the game
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
