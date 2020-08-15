import React from "react";
import Items from "./components/Items";
import "./App.css";

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        title: "Kale",
        purchased: false,
      },
      {
        id: 2,
        title: "Olives",
        purchased: false,
      },
      {
        id: 3,
        title: "Grapefruit",
        purchased: false,
      },
      {
        id: 4,
        title: "Coriander",
        purchased: false,
      },
    ],
  };

  // (Toggle)
  markPurchased = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          item.purchased = !item.purchased;
        }
        return item;
      }),
    });
  };

  removeItem = (id) => {
    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id)],
    });
    console.log(id);
  };

  render() {
    console.log(this.state.items);
    return (
      <>
        <div className="App">
          <header className="header">
            <p>Groceries List</p>
          </header>
        </div>
        <div className="item-list">
          <Items
            items={this.state.items}
            markPurchased={this.markPurchased}
            removeItem={this.removeItem}
          />
        </div>
      </>
    );
  }
}

export default App;
