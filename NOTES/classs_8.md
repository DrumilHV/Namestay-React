# CLASS BASED COMPONENTS

1. You make a class which extends React.Componetnt.

2. You define a render method which returns a JSX element. Render() method

```jsx
class About extends React.Component {
  render() {
    return <div>About</div>;
  }
}
```

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

7. When you mount (load) a class component first the constructor is called then the render() method is called.

8. Parent Constructor -> parent render -> child constructor -> child render.

9. Constructor -> render -> componentDidMount.

10. <strong><span style="color:red">Parent Constructor -> parent render -> child constructor -> child render -> child componentDidMount -> Parent componentDidMount.</span></strong>
