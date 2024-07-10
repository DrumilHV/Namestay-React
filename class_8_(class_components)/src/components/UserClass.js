import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      dislike: 0,
      comment: [""],
    };
  }
  render() {
    const { name, adderess, contact, img } = this.props;
    return (
      <div className="res-card">
        <img src={img} alt={name} />
        <h1>Name: {name}</h1>
        <h1>Address: {adderess}</h1>
        <h1>Contact no: {contact}</h1>
        <div>
          <h3>Likes: {this.state.like}</h3>
          <h3>Dislikes: {this.state.dislike}</h3>
        </div>
        <div className="row">
          <button
            className="filter-btn"
            onClick={() => {
              this.setState({ like: this.state.like + 1 });
            }}
          >
            {" "}
            like
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              this.setState({ dislike: this.state.dislike + 1 });
            }}
          >
            {" "}
            dislike
          </button>
        </div>
      </div>
    );
  }
}
export default UserClass;
