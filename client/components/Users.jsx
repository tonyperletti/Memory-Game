import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// STYLED COMPONENTS

const Container = styled.div`
  display: flex;
`;

const Individual = styled.div`

`;

const Picture = styled.img`

`;

export default class Users extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   users: []
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <h1>Top Scores</h1>
        <Container>{this.props.users.map((user, i) =>
          <Fragment key={i}>
            <Individual>{user.userName}</Individual>
            <Picture src={user.imageUrl}></Picture>
            <button>Delete User</button>
          </Fragment>
        )}
        </Container>
        <h1>Delete User</h1>

      </div>
    );
  }
}

