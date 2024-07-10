import React from "react";
import UserClass from "./UserClass";

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
        <div>
          <h1>About {this.state.name}</h1>
          <p>{this.state.description};</p>
          <p>Number of likes: {this.state.likes}</p>
          <button
            className="filter-btn"
            onClick={() => {
              this.setState({ likes: this.state.likes + 1 });
            }}
          >
            like
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              this.setState({ likes: this.state.likes - 1 });
            }}
          >
            dis-like
          </button>
        </div>
        <h1>Developers</h1>
        <div>
          <UserClass
            name={"Drumil"}
            img={
              "https://avatars.githubusercontent.com/u/91252875?s=400&u=3995a9c3fb30f8f6005588c9436c65e2b215b840&v=4"
            }
            adderess={"Bharat"}
            contact={"+91  1234567890"}
          />
        </div>
      </div>
    );
  }
}

export default About;
