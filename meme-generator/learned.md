 <h1>Intro</h1>
* * *
이부분 만들면서 목표가 있다면...

- css
  에는 혼자 Tailwind를 독학해서 적용해보자.
  처음 유튭강의 보고 styled-component를 알게됐을 때 너무나 신세계 같고 즐거웠는데, styled-component도 어느정도 한계는 있었다. 정말 하나하나 다 태그로 만들어서 적용해줘야 하는...그런...불편함이랄까?호호 게으른완벽주의자 성향에서 조금 탈피중인 나이지만 조금이나마 효율성을 더 따지는 나이기에 이참에 작은 프로젝트에 tailwind를 적용하면서 배워나갈 생각이다.
- react
  ![무엇을배울까용](./what_we_will_learn.jpg)
  <br/><br/>

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

  * [you-probably-dont-need-derived-state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

## conditional rendering

      1. What is "conditional rendering"?
      When we want to only sometimes display something on the page
      based on a condition of some sort

      2. When would you use &&?
      When you want to either display something or NOT display it

      3. When would you use a ternary?
      When you need to decide which thing among 2 options to display

## form

      1. 리액트의 큰 약점.(지원해주는 api 물론 존재.)
      2. [FORM 공식문서](https://reactjs.org/docs/forms.html)

      3. **Controlled Components**

```javascript
export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
    </form>
  );
}
```

      4. **Handling Multiple Inputs**
         - When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

## form recap

         1. In a vanilla JS app, at what point in the form submission
            process do you gather all the data from the filled-out form?
         Right before the form is submitted.


         2. In a React app, when do you gather all the data from
            the filled-out form?
         As the form is being filled out. The data is all held in local state.


         3. Which attribute in the form elements (value, name, onChange, etc.)
            should match the property name being held in state for that input?
         `name` property.


         4. What's different about saving the data from a checkbox element
            vs. other form elements?
         A checkbox uses the `checked` property to determine what should
         be saved in state. Other form elements use the `value` property instead.


         5. How do you watch for a form submit? How can you trigger
            a form submit?
            - Can watch for the submit with an onSubmit handler on the `form` element.
            - Can trigger the form submit with a button click.

## SyntheticBaseEvent

      * https://ko.reactjs.org/docs/events.html

## Computed Property Name

      * [참조 문서](https://velog.io/@yujuck/object-key%EC%97%90-%EB%B3%80%EC%88%98%EB%A5%BC-%EB%84%A3%EC%9C%BC%EB%A0%A4%EB%A9%B4-Computed-Property-Name)

## UseEffect: Interact with an Api(outside of your app)

What are React's primary tasks?

- work with the DOM/browser to render UI to the page
- Manage state for us between render cycles (i.e. state values are "remembered" from one render to the next)
- Keep the UI updatated whenever state changes occur

What can't React handle on its own?

- (Out)side Effects!
  - localStorage
  - API/database interactions
  - Subscripttions (e.g. web sockets)
  - Syncing 2 different internal states together
  - Basically anything that React isn't in charge of

===> 솔루션으로 UseEffect() 줌 ㅎ

### side Effect

      1. What is a "side effect" in React? What are some examples?

      - Any code that affects an outside system.
      - local storage, API, websockets, two states to keep in sync

      2. What is NOT a "side effect" in React? Examples?

      - Anything that React is in charge of.
      - Maintaining state, keeping the UI in sync with the data,
        render DOM elements

      3. When does React run your useEffect function? When does it NOT run
        the effect function?

      - As soon as the component loads (first render)
      - On every re-render of the component (assuming no dependencies array)
      - Will NOT run the effect when the values of the dependencies in the
        array stay the same between renders

      4. How would you explain what the "dependecies array" is?

      - Second paramter to the useEffect function
      - A way for React to know whether it should re-run the effect function
