import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.Order[key];
    const isAvailable = fish && fish.status === "available";
    const orderTransition = {
      classNames: "order",
      key,
      timeout: { enter: 250, exit: 250 },
    };
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <CSSTransition {...orderTransition}>
          <li key={key}>
            Sorry {fish ? fish.name : "Fish"} is no longer Available!{" "}
            <button onClick={() => this.props.updateOrder(key)}>&times;</button>
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...orderTransition}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 250, exit: 250 }}
              >
                <span> {count}</span>
              </CSSTransition>
            </TransitionGroup>
            {fish.name}
            <button onClick={() => this.props.updateOrder(key)}>&times;</button>
          </span>
          <span className="price">{formatPrice(count * fish.price)} </span>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.Order);
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total: </strong>
            {formatPrice(total)}
          </li>
        </TransitionGroup>
      </div>
    );
  }
}

export default Order;
