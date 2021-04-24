import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.Order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "Fish"} is no longer Available!{" "}
          <button onClick={() => this.props.updateOrder(key)}>×</button>
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <span className="count">
            <span> {count}</span>
          </span>
          {fish.name}
          <button onClick={() => this.props.updateOrder(key)}>×</button>
        </span>
        <span className="price">{formatPrice(count * fish.price)} </span>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.Order);
    const fishId = this.props.fishes;
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.Order[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total: </strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;
