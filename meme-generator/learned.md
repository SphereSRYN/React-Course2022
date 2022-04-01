# I learned

- **pointer-events** https://reactjs.org/docs/events.html#pointer-events

## state

- **State**

  - **"Props"** refers to the properties being passed into a component in order for it to work correctly, similat to how a fuction received parameters: "from above." A component receiving props is not allowed to modify those props. (l.e. they are "immutable.")
  - **state**
    1. **How would you describe the concept of "state"?**
       A way for React to remember saved values from within a component.
       This is similar to declaring variables from within a component,
       with a few added bonuses
    2. **When would you want to use props instead of state?**
       Anytime you want to pass data into a component so that
       component can determine what will get displayed on the
       screen.
    3. **When would you want to use state instead of props?**
       Anytime you want a component to maintain some values from
       within the component. (And "remember" those values even
       when React re-renders the component).
    4. **What does "immutable" mean? Are props immutable? Is state immutable?**
       Unchanging. Props are immutable. State is mutable.
  - **Changing state**

    1. **You have 2 options for what you can pass in to a state setter function (e.g `setCount`). What are they?**

       - 1. New value of state (setCount(42))
       - 2. Callback function - whatever the callback function returns === new value of state

    2. **When would you want to pass the first option (from answer above) to the state setter function**?
       Whenever you don't need the previous value of state to determine what the new value of state should be.

    3. **When would you want to pass the second option (from answer above) to the state setter function?**
       Whenever you DO need the previous value to determine the new value
