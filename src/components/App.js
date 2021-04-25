import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./fish";
import { base } from "../base";

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSampleFishes = this.loadSampleFishes.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.deleteFish = this.deleteFish.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
  }
  state = {
    fishes: {},
    Order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ Order: JSON.parse(localStorageRef) });
    }
    this.refs = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.Order)
    );
  }

  componentWillMount() {
    base.removeBinding(this.refs);
  }

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }
  addToOrder(key) {
    // Copy Of Data For Safety
    const Order = { ...this.state.Order };
    // if Order is already exist add ++ Or add 1
    Order[key] = Order[key] + 1 || 1;
    // then set state
    this.setState({ Order });
  }
  updateFish(key, updateValue) {
    const fishes = { ...this.state.fishes };
    fishes[key] = updateValue;
    this.setState({ fishes: fishes });
  }
  deleteFish(key) {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes: fishes });
  }
  updateOrder(key) {
    const Order = { ...this.state.Order };
    delete Order[key];
    this.setState({ Order });
  }
  loadSampleFishes() {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order
          Order={this.state.Order}
          fishes={this.state.fishes}
          updateOrder={this.updateOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fish={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
