import React, { Component } from "react";
import Input from "../Input/Input";

class Form extends Component {
  // state = ()

  handleChange = (event) => {
    console.log(event);
  };

  render() {
    return (
      <form>
        <h3>Name</h3>
        <Input
          type="text"
          name="name"
          placeholder=""
          handleChange={this.handleChange}
        />
        <button>Add contact</button>
      </form>
    );
  }
}

export default Form;
