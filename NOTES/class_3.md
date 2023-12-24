# Build Scripts

1. You can change the build scripts in package.json in the `scripts`.
2. Inserd of doing `npx parcle index.html`, You can modify scripts in package.json and do

```json
...
"scripts": {
    "start" : "parcel index.html",
    "build" : "parcel build index.html",
    "test"  : "jest"
}
...
```

3. You can now do `npm run start` to start app in dev mode.
4. `"start"` is special keyword reseved by npm, so you can also do `npm start`, this only works for `"start"`.
5. You need to delete the `"main":"App.js"` in package.json because it will create problem with parcel, you are giving `index.html` as starting point and default is `App.js`.

# JSX

1. **_JavaScript XML_** : it is a syntax extension to JavaScript.
2. We can write react even [without jsx](https://legacy.reactjs.org/docs/react-without-jsx.html).
3. JSX is not HTML. JSX is HTML like syntax.
4. JSX is different from REACT.
5. [**_Why JSX?_**](https://legacy.reactjs.org/docs/introducing-jsx.html)
   <br>

- React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
  <br>
- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
  <br>
- React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

6. JSX is not a valid JavaScript because it can't be run on js engine.
7. Parcle will transpile this code to valid javaScript for your browser to understand.
8. Browser only understands ECMAScript 6 (ES6).
9. Parcle does the transpiling using Barbel.
10. **_JSX => (Barbel) React.createElement() => ReactElement (Js Object) => HTMLElment(render)_**
11. Barbel is a transpiler(converts code of one language to another language), or it can be called a is compiler.
12. We use `className` insterd of `class` like in css. We use calmel case in jsx and not `-`(hypen) because jsx is not html. (jsx is html like syntax)
13. If we want to write a jsx in multipel lines it's mandatory to wrap it in a set of `()`, however for single line jsx we need not do it. This is because jsx needs to know where the tags start and end. <br>
    eg.

```jsx
const heading = (
  <h1 className="red" tabIndex="5">
    This is heading h1
  </h1>
);
```

# Components

1. There are 2 ways to make a component<br>

- &nbsp; Class Baised Components [OLD WAY]
- &nbsp; Function Baised Components [Latest]

2. React Functional Componet is a JavaScript function. It always begins with a capital letter.
3. React Element:<br>

```jsx
const heading = <h1>THis is h1</h1>;
root.render(heading);
```

4. React Functional Component: <br>

```jsx
const Heading = () => {
  return <h1> This is H1 in functional Component.</h1>;
};
root.render(<Heading />);
```

5. Componnet composation is one React Functional component inside another.

```jsx
const Heading = () => {
  return (
    <div id="component">
      <Title />
      /* This is COMPONENT COMPOSATION */
      <h1 id="heading">THis is React H1 Functional Component! </h1>
    </div>
  );
};
```

6. We can inject any js code inside jsx. This can help us write react element in react functional componet.
   <br>

```jsx
const reactElement = <h2>THis is react element</h2>;
const Heading = () => {
  return (
    <div id="component">
      <h1 id="heading">This is React H1 Functional Component! </h1>
      {reactElement}
      <Info />
    </div>
  );
};
```

7. You can write a React Functional Comonent in a react elemenet, and it works.

```jsx
const reactElement = (
  <h1>
    <h1>This is React Functional Comonent inside a React element</h1>
    <Heading />
  </h1>
);
```

8. You can run any js code in a React functional component / react element by using a `{}` inside comonent / element.
   <br>

```jsx
const reactElement = (
  <h1>
    <h1>This is a React element</h1>
    <h2>{100 + 500}</h2>
  </h1>
);
```

9. JSX will sanitize the data you are passing in the `{}`. So you are safe from cross site scripting.
10. JSX will escape all the data coming to `{}`, that is it will convert it to a string before it reaches your browser, to prevent XSS (Cross site scripting) attacks.
11. You can call a react functional componet insted of using it as a tag. like.

```jsx
const reactElement = (
  <h1>
    <h1>This is React Functional Comonent inside a React element</h1>
    {Heading()}
  </h1>
);
```
