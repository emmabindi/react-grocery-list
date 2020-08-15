import React, { Component } from "react";

class Item extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.item.purchased ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.item;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          className="checkbox"
          onChange={this.props.markPurchased.bind(this, id)}
        />
        {title}
        <button
          className="delete-button"
          onClick={this.props.removeItem.bind(this, id)}
        >
          🗑
        </button>
      </div>
    );
  }
}

export default Item;
