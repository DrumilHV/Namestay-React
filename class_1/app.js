// creating elements is the core job of react. and this is managed by react not react dom.

const heading = React.createElement(
  "h1",
  { id: "heading", className: "red", styles: "backgroundColor: blue" },
  "This is hello World  from React!"
);
// creating root is the work of react dom and not react
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// React.createElement return s an object and not a html element
console.log(heading);
