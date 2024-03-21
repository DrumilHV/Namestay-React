# Let's Get Hooked

1. Most of the react projects have a folder called `src`, which will have the source code to the poject. You can also build your react app without `src` folder , it's the convension to store files in `src`.
2. saving the file as `.js` or `.jsx` will have no difference in the outcome of the code .
3. Nameing convensions , try to always name the component file the same name as the component.
4. Always name the JSX component as starting from capital Alphabet.
5. Always export the header file before inporting it.

```jsx
export default Header;
```

6. You can import file using file exact file name or just the header file, like

```jsx
import Header from "./components/Header.js";
//or
import Header from "./components/Header.jsx";
//or
import Header from "./components/Header"; // use this syntax, easy and simple
```

7. Never ever keep hard coded data in the component file, like dummy data.
8. Make a utils folder (best practicses).
9. Name the constants in all CAPITAL with SNAKE_CASE (like this).
10. We have default export and we have named exports (synatax as follows).

```js
export const data = 10;
```

11. Named import

```js
import { data } from "./utils/constants";
```

12. Quick Summary

- Default export `export default <VAR_NAME>`
- Default import `import <VAR_NAME> from "file_path";`

- Named export `export const <VAR_NAME>  = 10;`
- Named import `import {<VAR_NAME>} from "file_path";`

13. keeping files small is always good.

14. We can add event handlers like click handler,onchange using the follwing syntax

```jsx
<button className="filter-btn" onClick={() => {}}>
  Popular
</button>
```

# React Hooks

1. The reason we use frameworks is to keep data layer and UI layer constistant , be it React, Angular, Vew etc.
2. React has its super power in keeping DOM manipulation, efficient dom manipulation , virtual dom, reconciliation, griff algo etc.
3. When we update the data the data the UI has no compulsion to change in sync to data, like below example

```js
let array = [1, 2, 3, 4, 5];
array.map((num) => {
  div.innerHTML = `${num}`;
});

array = array.filter((num) => num > 3);
```

- You will not see the data have changed, rerun this script any number of times it will not reflect on the screen becaue it renders on screen first and then filter has been applid, you can log the updated array and see how array is updated but no change in UI.

- <em><strong>HOOKS ARE JUST NORMAL JAVASCRIPT (UTILITY) FUNCTIONS </strong> </em>
- useState() Hook:

  - maintais the state of component.
  - it behaves like a normal variable.
  - declaration like `const [name] = useState('')`
  - whatever we pass in useState() initially is the default state of stateVariable.
  - whenever we want to update the stateVariable we will the second parameter of the useState like so `const [name, setName] = useState('')`, the convension is to name the setter function similar to variable with a set.
  - this setter function is a utility js function to set the state of the stateVarible and this helps us insync the with UI.
  - <strong>whenever the state changes react re renders the component.</strong>

- useEffect() Hooks:

# Reconciliation Algorithm

1. React has a virtual dom, which is a represnetaion of actual dom.
2. Actaul dom is all the nested html tags like

```html
<body>
  <div>
    <h1>Hello world<h1>
  </div>
</body>
```

3. The virtual dom is light weight representaion of real dom (it looks like an object), this is used to do the very fast dom manipulation.
4. It is easier to compare two objects than two html trees, the REACT FIBER algo (<strong>DIFF ALGORITHM</strong>, reactfiber came after react 16). This compares the two virtual doms before and after the update, and only changes the part which is different.
5. React does not touch the actual dom a lot. this is the reason why react is so fast.
6. React did not start the virtual dom , it existed long long back, react took this and made the best implementaion of this, that made react fast.

Read more on the page class_5.1
