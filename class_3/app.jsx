import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Namestay React using JSX🚀🚀🚀</h1>;
const Info = () => {
  return (
    <div id="info">
      <h3>This is a React Toutorial!</h3>
    </div>
  );
};

const Heading = () => {
  return (
    <div id="component">
      {Title()}
      <h1 id="heading">This is React H1 Functional Component! </h1>
      <Info />
    </div>
  );
};

const reactElement = (
  <h1>
    <h1>{Title()}</h1>
    {Heading()}
  </h1>
);

const try1 = <h1>{reactElement}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

console.log("this is FC", Heading);
//
