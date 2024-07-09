# CLASS BASED COMPONENTS

1. You make a class which extends React.Componetnt.
2. You define a render method which returns a JSX element. Render() method
3. You use state vars like so.

```jsx
constructor(props) {
    super(props);
    this.state = {
      name: "FoodJinx",
      likes: 0,
      description: "abc",
    };
}
```

4. You can use this.state to access the state vars.

```jsx
<h1>About {this.state.name}</h1>
```

5. You can use this.setState to change the state vars.

```jsx
this.setState({ likes: this.state.likes + 1 });
```

6. NEVER change the state var yourself.
