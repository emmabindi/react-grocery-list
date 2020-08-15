import React from "react";
import Item from "./Item";
// import PropTypes from "prop-types";

class Items extends React.Component {
  render() {
    console.log(this.props);
    return this.props.items.map((item, index) => (
      <div className="item-list" key={index}>
        <Item
          item={item}
          markPurchased={this.props.markPurchased}
          removeItem={this.props.removeItem}
        />
      </div>
    ));
  }
}

// Items.propTypes = {
//   items: PropTypes.array.isRequired,
// };

export default Items;
