import React from "react";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import About from "./components/pages/About";
import "./App.css";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    items: [
      {
        id: uuid(),
        title: "Kale",
        purchased: false,
      },
      {
        id: uuid(),
        title: "Olives",
        purchased: false,
      },
      {
        id: uuid(),
        title: "Grapefruit",
        purchased: false,
      },
      {
        id: uuid(),
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

  // Delete Item
  removeItem = (id) => {
    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id)],
    });
    console.log(id);
  };

  addItem = (title) => {
    console.log(title);
    const newItem = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    console.log(this.state.items);
    return (
      <Router>
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <AddItem addItem={this.addItem} />
              <div className="item-list">
                <Items
                  items={this.state.items}
                  markPurchased={this.markPurchased}
                  removeItem={this.removeItem}
                />
              </div>
            </>
          )}
        />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
