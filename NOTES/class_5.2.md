# React Components, Elements, and Instances

1. React started of with object oriented design.
2. In the paragdime of Object Oriented UI design you have to make componets as classes.
3. All the instances of the class have their own properties and state.
4. When you use a button on Form component you have to make sure that you are manually keeping tarck and updating the state of the instance and updating the UI.

- This is the price you pay for using the Object oriented UI paragdime.

5. Each component instance has to keep references to its DOM node and to the instances of the children components, and create, update, and destroy them when the time is right. The lines of code grow as the square of the number of possible states of the component, and the parents have direct access to their children component instances, making it hard to decouple them in the future.
6. When we create an instance of class, in react we are just describing how we want to see it. We can create a DOM element and then distory it , it will not matter much .
   - <strong>DOM is an OBJECT [THIS WHY REACT DOM OPERATION ARE BLAZING FAST]</strong >

# TOP DOWN RECONSILIATION

- When you call a component, React get's an object, then react goes throught its kid's , and then each of their kids , this leads to building of an entire tree.
- Now when we go through the kids we more generally mean we go throught the attributes of the componet.
- One such attribute is childern.
- React in this way acquires the details of the state of the component.
- React does this from the top of the tree to the bottom .
- React then uses this information to creacte a new virtual dom , and then compare it to the previous dom, where ever there is a difference in the state it will re render only that component, which will lead to brilliant performance.
