import React from "react";
import Item from "./Item";

class Items extends React.Component {
  render() {
    console.log(this.props);
    return this.props.items.map((item, index) => (
      <div className="item-list" key={index}>
        <Item
          item={item}
          markPurchased={this.props.markPurchased}
          removeItem={this.props.removeItem}
          // unsure
          addItem={this.props.addItem}
        />
      </div>
    ));
  }
}

export default Items;
