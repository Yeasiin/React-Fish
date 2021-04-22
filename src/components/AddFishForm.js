import React from "react";

class AddFishForm extends React.Component {
  constructor() {
    super();
    this.createFish = this.createFish.bind(this);
  }
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish(e) {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addFish(fish);
    e.currentTarget.reset();
  }

  render() {
    return (
      <div className="AddFishForm">
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            placeholder="Name"
          />
          <input
            type="text"
            name="price"
            ref={this.priceRef}
            placeholder="Price"
          />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea
            name="desc"
            placeholder="Desc"
            ref={this.descRef}
          ></textarea>
          <input
            type="text"
            name="image"
            ref={this.imageRef}
            placeholder="Image"
          />
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
