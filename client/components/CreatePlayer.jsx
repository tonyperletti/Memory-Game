import React from "react";

const CreatePlayer = (props) => (
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

export default CreatePlayer;
