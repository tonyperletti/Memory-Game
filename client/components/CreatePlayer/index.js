import React from "react";
import App from "../App";
import axios from "axios";

class CreatePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      name: "TONY",
      image: "",
      currentPlayer: "", //////// HARD CODED FIX THIS!!!!!
      currentPic: "",
      id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increaseId = this.increaseId.bind(this);
  }

  increaseId() {
    var count = this.state.id;
    this.setState({
      id: count++,
    });
    // console.log(this.state.id);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    axios
      .post("/players/", {
        id: this.state.id,
        userName: this.state.name,
        imageUrl: this.state.image,
      })
      .then(() => {
        console.log("Submitted");
        this.increaseId();
      })
      .catch((error) => console.log(error));
  }

  // componentDidMount() {
  //   axios
  //     .get("/players/")
  //     .then((data) => {
  //       var players = data.data;
  //       console.log(players);
  //       this.setState({
  //         players: players,
  //         currentPlayer: data.data[0].userName,
  //         currentPic: data.data[0].imageUrl,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }
  render() {
    return (
      <div className="user-form">
        <h3>Enter Your Information</h3>
        <form>
          <label>Name</label>
          <input
            className="name-input"
            type="text"
            name="name"
            onChange={this.handleChange}
          ></input>
          <label>Profile Picture</label>
          <input
            className="image-input"
            type="text"
            name="image"
            onChange={this.handleChange}
          ></input>
          <button className="submit-button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePlayer;
