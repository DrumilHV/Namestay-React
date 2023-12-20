import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("div", {}, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "child1" }, "I am H1 tag! "),
    React.createElement("h2", { id: "child2" }, "I am H2 tag! "),
    React.createElement(
      "h2",
      { id: "child3" },
      "H1 , H2 and me are sibllings tags are sibllings "
    ),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "child1" }, "I am H1 tag! "),
    React.createElement("h2", { id: "child2" }, "I am H2 tag! "),
    React.createElement(
      "h2",
      { id: "child3" },
      "H1 , H2 and me are sibllings tags are sibllings "
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);
//
