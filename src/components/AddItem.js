import React, { Component } from "react";

export class AddItem extends Component {
  state = {
    title: "",
  };

  // e.target.name in the array is in place of "title" so it can be reused if it were a form with multiple inputs.. handy trick
  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10" }}
          name="title"
          placeholder="Add Item..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

export default AddItem;
