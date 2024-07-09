import React from "react";

document.title = "FoodGinx | About";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "FoodJinx",
      likes: 0,
      description:
        "FoodGinx is a food delivery service that allows you to order food from your favourite restaurent",
    };
  }
  render() {
    return (
      <div className="container">
        <h1>About {this.state.name}</h1>
        <p>{this.state.description};</p>
        <p>Number of likes: {this.state.likes}</p>
        <button
          onClick={() => {
            this.setState({ likes: this.state.likes + 1 });
          }}
        >
          like
        </button>
        <button
          onClick={() => {
            this.setState({ likes: this.state.likes - 1 });
          }}
        >
          dis-like
        </button>
      </div>
    );
  }
}

export default About;
