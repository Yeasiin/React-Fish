import React, { Component } from "react";

export default class EditFishForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const updateFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updateFish);
  }

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
          placeholder="Name"
        />
        <p></p>
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
          placeholder="Price"
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button
          type="submit"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          Remove Item
        </button>
      </div>
    );
  }
}
