{
  /* <div>
    <div id="parent">
        <h1 id="child1">I am a h1 tag </h1>
        <h2 id="child2">I am a h2 tag , and this is how you pass siblings </h2>
    </div>
</div> 
*/
}

//we add children in array if there exists siblings
//we put React.createElement in the last argument to create nexted structure !
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
// root.render will replace and not append.
root.render(heading);

console.log(heading);
