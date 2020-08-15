import React, { Component } from "react";
import PropTypes from "prop-types";

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
          onChange={this.props.markPurchased.bind(this, id)}
        />
        {/* {this.props.item.title} */}
        {title}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
