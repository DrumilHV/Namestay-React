# Monolithinc Architecture

1. seperation of concerns, every single serive will be independent of each other.
2. Single responsiblity princlpel.
3. All the service will be differnt, like UI, database, backend,sms, auth etc.

# Rendering the UI

1.Two approches to render the components

- website loads -> API(delay of 100ms) -> render the UI
- website loads -> Render the empty UI -> API(Delay of 100ms)-> Render the UI.

2. In react we prefer to use the second approch as it gives us better user experience(UX).

- because till 100ms the page is empty, and suddely we see everthing on the page, this give's clumzy apperarence to the web app .

3. We use the second approch in react because we can afford to do so , we can render fast (like very fast ) cus react s core competency is to do the dom manipulation quickly, so 2 renders will not costly in terms of time.
4. When we use react (or in general) we make a lot of api calls, so two reders are not a big deal (if you know you know (reconsiliation and diffing algo)).
5. Hooks -> SuperPower Full Funcitons.
6. We can pricicely do the above implimentation in react, once the rendering is done (render 1 : without data),
   the <strong>useEffect()</strong> Hook. [New Information for me , as I always thought that call useEffect to make an API call, why so , Well I know today.]
7. The useEffect call back funcion will be called only after the initial render is finished. Then the very next step is to call the funtion in useEffect(the callback function.).

```js
const Body = () => {
  useEffect(() => {
    console.log("Use Effect called!");
  });
  console.log("rendered");
};
/* output
renderd
Use Effect called!
*/
```

8. How can you change a constant value in react while using a useState Hook like so

```jsx
const [book, setBook] = useState("Harry Potter");
// code

setBook("Chronicals of Nania");
```

<strong>
Actually react is now rendering the entrie component agian and this time the the constant variable is set to the new value and this is how we update the state variables
</strong>
