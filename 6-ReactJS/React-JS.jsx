// -------------------------------------------
  // Basic Interview Questions Of React :
// -------------------------------------------


// 1. What is React, and why is it used?
// -------------------------------------

// React is a JavaScript library designed to help developers create fast, interactive user interfaces for websites, especially single-page applications where users need a smooth experience without constant page reloads. It allows developers to build small, reusable parts of the UI, called components, that can be reused across the site. This approach keeps the code organized and manageable, even as the app grows in size and complexity.

// One of React’s key features is its use of the Virtual DOM, a system that updates only the parts of the page that have changed. This makes apps more efficient and responsive. React’s large community also provides a wide range of tools, libraries, and resources, making it easier for developers to build and maintain high-performance websites. As a result, React has become a popular choice for creating modern web applications.




// 2. What is JSX, and why is it preferred in React?
// -------------------------------------------------
// JSX, or JavaScript XML, is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe what the UI should look like. With JSX, you can write HTML-like code directly within JavaScript, making it easier to build and visualize the structure of your components. This approach is preferred in React because it makes the code more readable and allows developers to see the layout of the UI within the logic. JSX also gives you the power of JavaScript in your HTML-like code, making it easy to add dynamic content and manage the UI efficiently.




// 3. How does JSX differ from HTML?
// ----------------------------------
// JSX looks like HTML, but it has some key differences. Unlike HTML, JSX is used inside JavaScript code and allows JavaScript logic, like embedding variables or functions, directly within the tags. Also, some HTML attributes are different in JSX: for example, class becomes className, and for becomes htmlFor. JSX must have one parent element wrapping all the content, and all tags must be properly closed (even self-closing tags like <img />). Overall, JSX blends HTML structure with JavaScript functionality, making it more powerful for building dynamic user interfaces.




// 4. What are components in React?
// --------------------------------
// Components in React are small, reusable pieces of the user interface. Each component represents a part of the UI, like a button, form, or header, and can be used multiple times across the app. Components make it easier to organize and manage code by breaking the UI into independent sections. There are two main types: functional components, which are simple and focus on displaying content, and class components, which can handle more complex logic. By using components, React lets developers build and update sections of the UI separately, making the code more efficient and easier to maintain.




// 5. What is the difference between functional and class components?
// ------------------------------------------------------------------
// The main difference between functional and class components in React is how they manage state and behavior. Functional components are simpler and are written as functions. They use hooks (like useState) to manage state and effects. Class components are written using JavaScript classes and use this.state and this.setState to handle state, along with lifecycle methods like componentDidMount.

// Today, functional components are preferred because they are easier to write and use fewer lines of code, especially with hooks. Class components are still used, but they are generally considered more complex for handling state and logic.




// 6. What is a single-page application (SPA), and how does React enable it?
// -------------------------------------------------------------------------
// A single-page application (SPA) is a type of web app where the entire website loads once, and only the parts of the page that change are updated, instead of reloading the whole page each time. This makes the app feel faster and smoother because it doesn't need to refresh the entire page.

// React enables SPAs by using a virtual DOM to update only the parts of the UI that need changes, without reloading the entire page. React manages the UI as components, and when data changes, it efficiently updates the right components, giving users a seamless experience.




// 7. What are props in React?
// ---------------------------
// n React, props (short for properties) are used to pass data from one component to another. They allow components to receive information from their parent and use it to render content. Props are read-only, meaning a component cannot change its own props. Example:
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}




// 8. How is state different from props?
// -----------------------------------------
// In React, props are used to pass data from a parent component to a child component. Props are read-only, meaning they cannot be changed by the child component. State, on the other hand, is used to store data that can change within a component. The component can update its own state, and when it changes, the UI re-renders to reflect the new data. Example:

function Counter() {
    const [count, setCount] = useState(0); // state to store count
  
    return (
      <div>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }
  
  function App() {
    return <Counter />;
  }
  
// In short, props are for passing data down the component tree, while state is for storing data that can change within the component.




// 9. How can you pass data from one component to another in React?
// ------------------------------------------------------------------
// In React, you can pass data from one component to another using props. The parent component sends data to the child component through props. The child component then receives the data and can use it. Example:
function Parent() {
  const message = "Hello from Parent!";
  return <Child message={message} />;
}

function Child(props) {
  return <h1>{props.message}</h1>;
}




// 10. What is the significance of the `key` prop in lists?
// --------------------------------------------------------
// In React, the key prop is used to help React identify which items in a list have changed, been added, or removed. It helps improve performance by making the process of updating the UI more efficient. Each list item should have a unique key to avoid unnecessary re-rendering. Example:
function ItemList() {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>  
      ))}
    </ul>
  );
}

// In this example: Each <li> element has a key prop that helps React keep track of each item in the list. Even though the index is used here, it’s better to use a unique identifier when available (like an ID) to avoid issues when items are added or removed.




// 11. How do you handle events in React?
// -----------------------------------------
// In React, events are handled using event handlers. You attach an event handler function to an element's event (like onClick, onChange, etc.), and React will call that function when the event happens. The event handler is written as a function, and it usually takes an event object as an argument. Example:

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
// In this example: The handleClick function is called when the button is clicked. The onClick attribute in the button specifies that handleClick should run when the click event occurs.




// 12. What are controlled and uncontrolled components in React?
// -------------------------------------------------------------
// controlled components are form elements (like input fields) where the component's state is the source of truth. The input value is controlled by React's state, and any changes to the input are handled by state updates. Uncontrolled components are form elements where the DOM itself keeps track of the value, and React does not control it directly.

// 1. Example of Controlled Component:
function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input value={value} onChange={handleChange} />;
}
// In this example, the input's value is controlled by React state, making it a controlled component.


// 2. Example of Uncontrolled Component:
function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
// In this example, the input's value is not controlled by React, and it’s accessed using a reference (ref), making it an uncontrolled component.




// 13. What is a React fragment, and why would you use it?
// -------------------------------------------------------
// A React Fragment is a way to group multiple elements without adding extra nodes to the DOM. It lets you return multiple elements from a component without wrapping them in a <div> or other HTML element, which can help keep the DOM cleaner and more efficient. Example:
function List() {
  return (
    <React.Fragment>
      <h1>My List</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </React.Fragment>
  );
}

// In this example, the <h1> and <ul> elements are grouped together using React.Fragment without adding an extra parent element like a <div>. This helps avoid unnecessary elements in the DOM.




// 14. How do you conditionally render elements in React?
// ------------------------------------------------------
// In React, you can conditionally render elements using JavaScript operators like if, ternary (? :), or logical &&. This allows you to display content based on a condition.

// 1. Example using if:
function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in</h1>;
}

// 2. Example using ternary operator:
function Welcome({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>;
}

// 3. Example using && (logical AND):
function Notifications({ hasNewNotifications }) {
  return (
    <div>
      {hasNewNotifications && <p>You have new notifications!</p>}
    </div>
  );
}

// In these examples: The Welcome component conditionally renders either "Welcome back!" or "Please log in" based on the isLoggedIn prop. The Notifications component shows a message only if hasNewNotifications is true, using the && operator.




// 15. What are React Hooks? Name a few commonly used hooks.
// ---------------------------------------------------------
// React Hooks are special functions that allow you to use state and other React features in functional components. Before hooks, you could only use state and lifecycle methods in class components. Hooks make it easier to manage state, side effects, and more in functional components.

// Commonly Used Hooks:
// 1. useState: Manages state in a functional component.
// 2. useEffect: Performs side effects (like fetching data or updating the DOM) after the component renders.
// 3. useContext: Accesses data from React's Context API without passing props manually.
// 4. useRef: Creates a reference to an element or a value that persists across renders.

// Example using useState and useEffect:

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h1>Time: {seconds}s</h1>;
}




// --------------------------------------------
 // Intermediate Interview Questions Of React:
// --------------------------------------------

// 1. Explain the useState Hook.
// -----------------------------
// The useState hook in React allows you to add state to functional components. It lets you create a state variable and a function to update that state. When the state changes, React re-renders the component to show the new state. Example:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count is the state variable, setCount updates it

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
// In this example: useState(0) creates a count state with an initial value of 0. setCount is used to update count whenever the button is clicked, increasing it by 1. The useState hook is a simple way to manage and update state in functional components.




// 2. How does the useEffect Hook work?
// -------------------------------------
// The useEffect hook lets you perform side effects in React functional components, like fetching data, updating the DOM, or setting up timers. useEffect runs after the component renders, and you can control when it runs by giving it dependencies. Example:

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array: runs only once

  return <h1>Time: {seconds}s</h1>;
}
// In this example: useEffect sets up a timer to update seconds every second. The empty [] dependency array means useEffect runs only once when the component mounts. The return function cleans up the timer when the component is removed. useEffect is powerful for handling tasks that need to happen after the component renders or when certain data changes.




// 3. How can you make an API call in React?
// -----------------------------------------
// In React, you can make an API call by using the useEffect hook to fetch data when a component mounts. Inside useEffect, you can use JavaScript's fetch function (or libraries like Axios) to make the request and update the component’s state with the data received. Example:
import React, { useState, useEffect } from 'react';

function DataDisplay() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []); // Empty array makes it run only once

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
// In this example: fetch is called inside useEffect to get data from an API when the component mounts. The data is stored in data state, and setData updates it when the API call succeeds. The data ? ... : ... line displays the data if it’s available or shows "Loading..." if it's still fetching.




// 4. What are Higher-Order Components (HOCs)? Give an example.
// ------------------------------------------------------------

// A Higher-Order Component (HOC) in React is a function that takes a component and returns a new component. It’s a way to reuse component logic across multiple components. HOCs don’t change the original component but "wrap" it, adding extra functionality or data. Example: Suppose we want to add loading functionality to multiple components. We can create an HOC to show a loading message while data is being fetched.

function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}

// Using the HOC
function UserInfo({ name }) {
  return <h1>User: {name}</h1>;
}

const UserInfoWithLoading = withLoading(UserInfo);

// Usage
<UserInfoWithLoading isLoading={true} name="Alice" />;

// In this example: withLoading is an HOC that wraps any component and displays "Loading..." if isLoading is true. UserInfoWithLoading is the wrapped component that uses withLoading to conditionally show either the loading message or the user info. HOCs allow you to add reusable behavior without modifying the original component.




// 5. Explain the use of React Context API.
// -----------------------------------------
// The React Context API is used to share data across multiple components without having to pass props down through each level manually. It’s helpful for managing global data, like user settings, theme, or authentication, that multiple components need access to. Example:

import React, { createContext, useContext } from 'react';

const ThemeContext = createContext(); // Create context

function App() {
  return (
    <ThemeContext.Provider value="dark"> {/* Provide value */}
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext); // Consume value
  return <button style={{ background: theme === 'dark' ? '#333' : '#fff' }}>Click Me</button>;
}
// In this example: ThemeContext is created and given a value ("dark") in ThemeContext.Provider. ThemedButton uses useContext to access the value of ThemeContext directly, applying the theme without prop drilling. The Context API makes it easy to pass data to deeply nested components without manually passing props at every level.




// 6. How does the Context API differ from props drilling?
// -------------------------------------------------------
// The Context API allows you to share data directly with any component that needs it, without passing props through each level. This avoids props drilling, where data has to be passed down through multiple layers of components just to reach a deeply nested one. Context simplifies data sharing, especially for global data that many components need access to. Example:


// Without Context (props drilling):
function App() {
  const user = "Alice";
  return <Toolbar user={user} />;
}

function Toolbar({ user }) {
  return <ThemedButton user={user} />;
}

function ThemedButton({ user }) {
  return <p>User: {user}</p>;
}
// Here, user is passed through each component layer to reach ThemedButton.


// With Context (no props drilling):
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Alice">
      <Toolbar />
    </UserContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const user = useContext(UserContext);
  return <p>User: {user}</p>;
}
// In this example, UserContext allows ThemedButton to access user directly, eliminating the need for props drilling through intermediate components.




// 7. What are refs, and when should you use them in React?
// --------------------------------------------------------

// Refs in React are a way to directly access and interact with DOM elements or values within a component, without triggering a re-render. You can use refs to focus on an input, scroll to a specific element, or store a mutable value that doesn't affect rendering.
// When to Use Refs: To focus or control an input field.To measure or control animations. To store a value that doesn’t need to trigger a re-render (e.g., timer ID).

// Example:
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // Create a ref

  const handleClick = () => {
    inputRef.current.focus(); // Use ref to focus on the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
// In this example: inputRef is a ref attached to the <input>. handleClick uses inputRef.current.focus() to focus the input when the button is clicked.
// Refs are helpful when you need direct DOM access without affecting the component’s state or re-rendering.




// 8. What is the useRef Hook, and how is it different from createRef?
// ------------------------------------------------------------------

// The useRef hook in React creates a reference that holds a mutable value. Unlike createRef, which creates a new ref each time the component re-renders, useRef creates a persistent ref that doesn’t reset on re-renders. This makes useRef ideal for storing values or DOM elements that need to persist across renders.

// Difference:
// 1. createRef: Creates a new ref every render (mainly used in class components).
// 2. useRef: Keeps the same ref across renders (best for functional components).

// Example:
import React, { useRef, useState } from 'react';

function Counter() {
  const countRef = useRef(0); // Doesn't reset on re-renders
  const [count, setCount] = useState(0); // State changes trigger re-renders

  const increment = () => {
    countRef.current += 1;
    setCount(count + 1);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
// In this example: countRef created with useRef does not cause re-renders when updated. count is state, so changing it causes the component to re-render.
// useRef is often preferred in functional components for persisting values across renders without




// 9. What is the purpose of `React.memo`?
// -----------------------------------------
// The purpose of React.memo is to optimize functional components by preventing unnecessary re-renders. It wraps a component and checks its props—if the props haven’t changed, React.memo skips re-rendering the component, improving performance. Example:

const Greeting = React.memo(function Greeting({ name }) {
  console.log('Greeting re-rendered');
  return <h1>Hello, {name}!</h1>;
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Greeting name="Alice" /> {/* Won't re-render when count changes */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
// In this example: Greeting is wrapped with React.memo, so it only re-renders when its name prop changes. Changing count in App doesn’t re-render Greeting, making the app more efficient.
// React.memo is useful for improving performance, especially in components that don’t need to update frequently.




// 10. Explain React lifecycle methods.
// -----------------------------------------
// React lifecycle methods are special methods in class components that let you run code at specific points in a component's lifecycle: when it mounts, updates, or unmounts. They help you manage side effects like data fetching or setting up timers.

// Main Lifecycle Methods:
// 1. componentDidMount: Runs after the component is added to the DOM. Great for fetching data.
// 2. componentDidUpdate: Runs after the component updates due to a change in props or state.
// 3. componentWillUnmount: Runs right before the component is removed from the DOM. Useful for cleanup tasks.

// Example:
class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => console.log('Tick'), 1000); // Start a timer
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear timer on unmount
  }

  render() {
    return <h1>Timer is running...</h1>;
  }
}
// In this example: componentDidMount starts a timer when Timer is added to the DOM. componentWillUnmount clears the timer when the component is removed.
// React lifecycle methods are essential for managing resources and side effects in class components. In functional components, you can use hooks like useEffect to handle similar tasks.




// 11. What are `componentDidMount` and `componentWillUnmount`, and when are they used?
// -----------------------------------------------------------------------------------

// componentDidMount and componentWillUnmount are lifecycle methods in React class components used to perform actions when a component is added or removed from the DOM.

// 1. componentDidMount: This method is called once after the component has been rendered and added to the DOM. It is useful for fetching data, setting up subscriptions, or starting timers.
// 2. componentWillUnmount: This method is called just before the component is removed from the DOM. It is useful for cleaning up tasks like clearing timers, canceling network requests, or removing event listeners.

// Example:
class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => console.log('Tick'), 1000); // Start a timer
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Stop the timer when the component is removed
  }

  render() {
    return <h1>Timer is running...</h1>;
  }
}
// In this example: componentDidMount starts a timer when the Timer component is added to the page. componentWillUnmount clears the timer when the component is removed, preventing memory leaks.
// These methods help manage side effects in class components.



// 12. Explain the useCallback Hook and why it is useful.
// -----------------------------------------------------
// The useCallback hook in React is used to memoize a function, meaning it keeps the same version of the function between renders unless its dependencies change. This is useful for optimizing performance, especially when passing functions as props to child components, so they don’t get re-created on every render.

// Without useCallback, a new function is created every time the component re-renders, which can be unnecessary if the function does not depend on the changing state or props. Example:

import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // `handleClick` will not change unless dependencies change

  return (
    <div>
      <Child onClick={handleClick} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
// In this example: The handleClick function is memoized using useCallback and won't change unless its dependencies change (in this case, there are no dependencies, so it stays the same).

// Without useCallback, every render of Parent would create a new version of handleClick, causing Child to re-render unnecessarily.
// Why it's useful: It prevents unnecessary re-renders of child components that rely on passed functions. It helps improve performance by reducing function re-creations in complex applications.




// 13. How is the useMemo Hook used in React?
// ------------------------------------------
// The useMemo hook in React is used to memoize or "remember" a value so that it only recalculates when certain dependencies change. This helps improve performance by avoiding expensive calculations on every render if the dependencies haven’t changed. Example:

import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // useMemo memoizes the computed value of factorial
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Only recomputes when `number` changes

  return (
    <div>
      <p>Factorial of {number} is {factorial}</p>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
// Explanation: useMemo memoizes the result of calculating the factorial. It only recalculates the factorial when number changes.
// Changing count will not trigger the recalculation of the factorial, improving performance.
// Why it’s useful: useMemo prevents unnecessary recalculations, especially for expensive operations, when the dependencies don’t change.




// 14. What are controlled components in forms?
// --------------------------------------------

// Controlled components in React are form elements (like input, textarea, select) whose values are controlled by React state. Instead of the form elements managing their own state, the value is passed from the React component’s state, and React is responsible for updating the value whenever the user interacts with the input. Example:

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState(''); // State to control the input

  const handleChange = (event) => {
    setName(event.target.value); // Update the state when the input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with name: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} // Controlled by React state
          onChange={handleChange} // Update state on input change
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
// Explanation: The <input> element’s value is set to name, which is a state variable. The onChange event updates the name state when the user types in the input.This makes the input a controlled component, as React controls its value through the state.




// -------------------------
 // React Router Questions:
// -------------------------


// 1. What is React Router, and why is it used?
// --------------------------------------------
// React Router is a library used to handle navigation in React applications. It enables you to create a single-page application (SPA), where different views or pages can be shown without reloading the entire page. React Router allows you to map different URLs to specific components, making it easy to navigate between different parts of the app. Example:
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;

// Explanation: BrowserRouter (Router) is used to wrap the application and enable routing. Link components are used to navigate to different routes without reloading the page. Route defines which component to display based on the URL. For example, the /about path will render the About component.

// Why it’s useful: React Router helps manage navigation between different views in a single-page app. It makes the app feel like multiple pages while keeping the benefits of a single-page application (fast loading and dynamic navigation).




// 2. Explain the difference between BrowserRouter, HashRouter, and MemoryRouter.
// ------------------------------------------------------------------------------
// In React Router, BrowserRouter, HashRouter, and MemoryRouter are different ways to handle routing and manage the URL history in your app. Each has its own use case, depending on how you want the app to handle navigation.

// 1. BrowserRouter: BrowserRouter uses the HTML5 History API to create clean URLs (without hashes). It is suitable for applications that are deployed on a server where the server can handle and respond to the clean URLs. Example:
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

// 2. HashRouter: HashRouter uses the URL hash (#) to simulate routing. It’s useful for static websites or apps hosted on platforms where you cannot configure the server to handle custom routes (like GitHub Pages). Example:
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

// 3. MemoryRouter: MemoryRouter keeps the history of navigation in memory (it doesn't modify the browser URL). It is typically used for testing or when the app doesn’t need actual URL management (e.g., in an embedded or non-browser environment). Example:
import React from 'react';
import { MemoryRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router initialEntries={['/']}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

// Key Differences:
// BrowserRouter: Clean URLs (e.g., /home) with History API support.
// HashRouter: URLs with hashes (e.g., /home#about), useful for static websites.
// MemoryRouter: Keeps history in memory, with no changes to the URL, ideal for non-browser environments or testing.
// Each router is chosen based on where and how your app will be used (server, static hosting, or testing).




// 3. How do you handle navigation in React?
// -----------------------------------------
// In React, navigation is typically handled using React Router, which allows you to manage different views or pages in a single-page application (SPA). You can navigate between pages without reloading the browser by using Link for navigation and Route to define which component should be displayed for each URL path. Example:

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>Welcome to the About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

// Explanation: BrowserRouter wraps the whole app and enables routing. Link is used to create navigation links. Clicking on a link changes the URL and renders the corresponding component. Route specifies which component should be displayed based on the URL. For example, if the path is /about, it will show the About component.




// 4. What is the use of `Switch` and `Route` in React Router?
// -----------------------------------------------------------
// In React Router, Switch and Route are used to manage how different components are rendered based on the URL.

// Route: This defines the path and the component to be displayed when the URL matches that path.
// Switch: It is used to wrap multiple Route components and ensures that only the first matching Route is rendered. This helps avoid rendering multiple components for the same path.

// Example:

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} /> {/* Default route for unmatched paths */}
      </Switch>
    </Router>
  );
}

// Explanation:
// Route: Defines which component should be rendered based on the URL. For example, when the URL is /about, it will render the About component.
// Switch: Ensures that only one route is rendered at a time. If multiple routes match, only the first one inside Switch will be shown. The NotFound route acts as a fallback for unmatched URLs.




// 5. How can you use dynamic routes in React Router?
// ----------------------------------------------------
// In React Router, dynamic routes allow you to create routes that can accept variables (parameters) in the URL. This is useful when you need to display different content based on the URL, like showing user profiles or product details based on an ID.Example:

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function UserProfile({ match }) {
  // `match.params.id` will be the dynamic part of the URL
  return <h2>User Profile for ID: {match.params.id}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link> | 
        <Link to="/user/2">User 2</Link>
      </nav>

      <Route path="/user/:id" component={UserProfile} />
    </Router>
  );
}

// Explanation: Route with a path of /user/:id defines a dynamic route. The :id part of the URL is a parameter that can change depending on the user. In the UserProfile component, match.params.id will give you the value of the dynamic parameter (1 or 2 in this case). When you click on the links, the app will show a different user profile based on the id in the URL.




// 6. What is the purpose of `useParams` Hook?
// --------------------------------------------
// The useParams hook in React Router is used to access dynamic parameters from the URL. It helps you retrieve values passed through the URL, such as user IDs or article slugs, and use them in your component. Example:

import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // Accessing the dynamic 'id' from the URL
  return <h2>User Profile for ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link> | 
        <Link to="/user/2">User 2</Link>
      </nav>

      <Route path="/user/:id" component={UserProfile} />
    </Router>
  );
}

// Explanation: useParams is used inside the UserProfile component to get the value of id from the URL. The id in the URL (/user/1, /user/2) is passed as a parameter, and useParams lets you access it as an object. When you click the links, the UserProfile component will show the corresponding user ID based on the URL.

  


// -----------------------------------------
 // Advanced Interview Questions Of React
// -----------------------------------------

// 1. What are React portals, and when should you use them?
// ---------------------------------------------------------
// React portals allow you to render a component outside the main DOM hierarchy of your component tree. This is useful when you want to display content like modals, tooltips, or popups that should be rendered outside the normal flow of the app but still be a part of the React component tree. Example:

import React from 'react';
import ReactDOM from 'react-dom';

function Modal() {
  return ReactDOM.createPortal(
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
      <h2>Modal Content</h2>
      <p>This is rendered outside the main app container.</p>
    </div>,
    document.getElementById('modal-root') // The modal will be appended to this div in the HTML file
  );
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Modal />
    </div>
  );
}

// Explanation: ReactDOM.createPortal is used to render the Modal component into a different part of the DOM (#modal-root) than the rest of the app, but it still behaves like a React component. The modal content will appear outside the main app container but still be managed by React.




// 2. What is code-splitting, and how do you implement it in React?
// ----------------------------------------------------------------
// Code-splitting in React is a technique that allows you to split your JavaScript code into smaller bundles and load them only when they are needed. This helps improve the performance of your app by reducing the initial loading time, as users only download the code required for the current page or feature. Example (using React.lazy and Suspense):

import React, { Suspense } from 'react';

// Dynamically import the About component only when it's needed
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>

      {/* Suspense is used to show a loading state while the About component is being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

// Explanation: React.lazy is used to dynamically import the About component. It means the About component will only be loaded when it is rendered for the first time, not when the app starts. Suspense is used to handle the loading state while the component is being fetched. The fallback prop can show something like a loading spinner or text until the component is ready.




// 3. Explain lazy loading and how you can implement it in React.
// --------------------------------------------------------------
// Lazy loading is a technique where parts of your app are loaded only when they are needed, rather than all at once when the app starts. In React, you can use React.lazy to load components only when they are rendered, which helps to improve the initial loading time of the app by splitting the code into smaller, manageable chunks. Example:

import React, { Suspense } from 'react';

// Dynamically import the About component using React.lazy
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>

      {/* Suspense handles loading state while About component is being loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

// Explanation: React.lazy: This is used to dynamically import the About component. It means that the About component will only be loaded when it is actually needed (i.e., when it's rendered for the first time). Suspense: This component wraps the dynamically loaded component (About in this case) and shows a loading message (<div>Loading...</div>) while the component is being fetched.




// 4. What is Concurrent Mode in React, and what are its benefits?
// ------------------------------------------------------------------
// Concurrent Mode in React is a feature that allows React to work on multiple tasks at once, improving the responsiveness and performance of your app. Instead of blocking the user interface while rendering, React can pause rendering work and come back to it later, without affecting the user experience. This makes React apps feel faster and more responsive, even during complex updates or heavy computations.

// Benefits:
// Improved performance: React can break down large rendering tasks into smaller chunks, so the UI remains responsive.
// Smooth user experience: React can prioritize more important updates, such as user interactions, making them faster and more seamless.
// Better handling of slow networks: It can manage network requests and data fetching more efficiently, showing parts of the app as soon as possible.

// Example (using React.lazy and Suspense with Concurrent Mode): To use Concurrent Mode, you'll need to wrap your app in React.StrictMode and use Suspense for data fetching. It's still an experimental feature, so it’s not enabled by default.

import React, { Suspense, useState } from 'react';

// Dynamically import a component
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h1>My Concurrent Mode App</h1>
      
      {/* Suspense is used to show a loading state while About is being fetched */}
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}

// How it works: React.lazy: Lazily loads the About component only when it's needed, which can be done in the background without blocking the main UI thread. Suspense: Handles the loading state while the About component is being loaded. With Concurrent Mode, React can continue rendering other parts of the app while waiting for the component to load.




// 5. How do you implement Error Boundaries in React?
// -------------------------------------------------------
// Error Boundaries in React are components that catch JavaScript errors in their child components, log those errors, and display a fallback UI instead of crashing the whole app. They are used to handle unexpected errors gracefully, preventing your app from breaking when something goes wrong.

// How to implement an Error Boundary: To implement an error boundary, you need to create a class component with the componentDidCatch lifecycle method, which allows you to catch errors in its child components.

// Example:
import React, { Component } from 'react';

// Error Boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  // Catch errors in child components
  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error.toString() });
    console.log(info); // Log the error details
  }

  render() {
    if (this.state.hasError) {
      // Show fallback UI if an error is caught
      return <h2>Something went wrong: {this.state.errorMessage}</h2>;
    }
    return this.props.children; // Render child components if no error
  }
}

// A component that may throw an error
function BuggyComponent() {
  throw new Error('This is a bug!');
  return <h2>No error here!</h2>;
}

function App() {
  return (
    <div>
      <h1>Welcome to my App!</h1>

      {/* Wrapping BuggyComponent with ErrorBoundary */}
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

      <p>Other parts of the app will still work!</p>
    </div>
  );
}

// Explanation:
// ErrorBoundary: This class component acts as an error boundary. It has a state (hasError) to check if an error has occurred, and the componentDidCatch method to catch and log errors.
// BuggyComponent: This component intentionally throws an error to simulate a problem. The error is caught by the ErrorBoundary component.
// App: The BuggyComponent is wrapped with the ErrorBoundary. If BuggyComponent throws an error, the ErrorBoundary will catch it and show a fallback UI (Something went wrong), while the rest of the app continues to work as expected.




// 6. What are the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?
// ------------------------------------------------------------------------------------------------
// Client-Side Rendering (CSR) and Server-Side Rendering (SSR) are two ways of showing content on the web.

// 1. Client-Side Rendering (CSR): In CSR, the server sends basic HTML, CSS, and JavaScript to the browser. The browser then takes over, runs the JavaScript, and creates the content dynamically. This method is common in modern web apps like single-page applications (SPAs).
// Example: In CSR, the content is rendered by JavaScript in the browser.

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello from CSR!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));

// 2. Server-Side Rendering (SSR): In SSR, the server generates the full HTML page, including all content, and sends it to the browser. The page is fully rendered when it arrives in the browser, and JavaScript makes it interactive afterward. This is good for SEO and faster initial loading.
// Example: In SSR, the server sends a fully rendered page.

// server.js (Node.js server example for SSR)
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App'); // React component

const server = express();

server.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>SSR Example</title></head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Key Differences:
// CSR: The browser does the work by rendering the page. It's faster after the first load but slower to start.
// SSR: The server sends the full content, making the page load faster at first. After loading, JavaScript takes over to add interactivity.




// 7. What is Server-Side Rendering (SSR) in React, and how does it work?
// ------------------------------------------------------------------------
// Server-Side Rendering (SSR) in React means that the server generates the full HTML content of the page and sends it to the browser. This allows the user to see the content immediately, even before React takes over and adds interactivity. In SSR, React components are rendered on the server and then sent to the client as fully formed HTML, making the first page load faster and better for SEO.

// How It Works: When a user visits the page, the server runs the React components and creates the HTML. The server sends the fully rendered HTML to the browser. React then "hydrates" the page by attaching event listeners and making the page interactive without needing to reload. Example:

// React Component (App.js):

import React from 'react';

function App() {
  return <h1>Hello from SSR in React!</h1>;
}


// Node.js Server for SSR (server.js):
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App'); // Import the React component

const server1 = express();

server.get('/', (req, res) => {
  // Render the React component to a string
  const content = ReactDOMServer.renderToString(<App />);
  
  // Send the fully rendered HTML to the browser
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>SSR Example</title></head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Explanation:
// The server (Node.js with Express) renders the App component using ReactDOMServer.renderToString() and sends the full HTML to the browser.
// The client receives the HTML and hydrates it, making it interactive using the JavaScript bundle (bundle.js).

// Why Use SSR?
// Faster Initial Load: The user sees content quickly because the server sends fully rendered HTML.
// Better SEO: Since search engines can read the full HTML content, it helps with indexing the page properly.




// 8. How does Next.js improve SSR and static generation in React applications?
// -----------------------------------------------------------------------------
// Next.js makes Server-Side Rendering (SSR) and Static Site Generation (SSG) easier for React apps. It allows you to pre-render pages either at request time (SSR) or at build time (SSG), improving performance and SEO.

// Key Features:
// SSR: Pages are rendered on the server for each request, making the initial load faster.
// SSG: Pages are pre-rendered at build time, resulting in ultra-fast page loads.

// Example of SSR in Next.js:
// pages/index.js
function HomePage({ data }) {
  return <h1>{data}</h1>;
}

export async function getServerSideProps() {
  return { props: { data: 'Hello from SSR!' } };
}


// Example of SSG in Next.js:
// pages/about.js
function AboutPage({ content }) {
  return <p>{content}</p>;
}

export async function getStaticProps() {
  return { props: { content: 'This page is statically generated.' } };
}

// Next.js simplifies SSR and SSG, offering faster loading times and better SEO for React apps.




// 9. What are the benefits of using Next.js over a standard React app?
// --------------------------------------------------------------------
// Next.js improves React by offering built-in features like faster rendering, automatic routing, and easy API setup.

// Key Benefits:
// 1. Faster Performance: Automatically uses Server-Side Rendering (SSR) or Static Site Generation (SSG) to make pages load faster.
// 2. File-Based Routing: Just create files in the pages folder, and Next.js automatically handles the routes.
// 3. API Routes: Easily add backend API functionality inside the pages/api folder.
// 4. Automatic Code Splitting: Next.js splits your code for faster page loads.
// 5. SEO-Friendly: Pre-renders pages for better SEO.

// Next.js offers faster performance, automatic routing, and built-in API routes, making it easier and more efficient than a standard React app.




// 10. What are Suspense and Concurrent Mode in React?
// ----------------------------------------------------------
// Suspense and Concurrent Mode in React help improve performance and user experience.

// 1. Suspense: Suspense delays rendering a component until it's ready (e.g., when data or code is loaded). While waiting, it shows a loading message. Example:
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// 2. Concurrent Mode: Concurrent Mode makes React handle tasks efficiently, keeping the UI responsive while doing background work. Example:
ReactDOM.createRoot(document.getElementById('root')).render(<App />);




// 11. How do you handle asynchronous data with Suspense in React?
// ----------------------------------------------------------------
// To handle asynchronous data with Suspense in React, you wrap components in Suspense and use a resource to fetch data. While the data is loading, a fallback (like a loading message) is shown. Example:

// Data Fetching Resource:
export function fetchData() {
  let data = null;
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Fetched Data!"), 2000);
  });
  return { read() { if (!data) throw promise; return data; } };
}
export const resource = fetchData();

// Using Suspense:
import React, { Suspense } from 'react';
import { resource } from './data';

function DataComponent() {
  const data = resource.read(); // Suspends until data is ready
  return <h1>{data}</h1>;
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  );
}

// Use Suspense with a resource to handle async data. React shows a loading state until the data is ready.




// 12. What are custom hooks in React, and why would you use them?
// ---------------------------------------------------------------
// Custom hooks in React are JavaScript functions that allow you to reuse stateful logic across different components. They help in keeping your components clean and focused on rendering by abstracting away complex logic like data fetching, form handling, or managing side effects. You create custom hooks when you want to share logic between multiple components without repeating code.

// For example, a custom hook can be used to manage a counter that persists its value in local storage. Here’s a simple example:

// Custom Hook Code (useCounter.js):
import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// Using the Custom Hook (App.js):
import React from 'react';
import useCounter from './useCounter';

function App() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

// In this example, the useCounter hook handles the logic for counting and can be reused in any component where a counter is needed. Custom hooks allow you to write cleaner, more modular code and keep logic separate from UI components.




// 13. What are the best practices for structuring a large React project?
// ------------------------------------------------------------------------
// When structuring a large React project, it's important to keep the code organized and maintainable. A common approach is to divide the project into feature-based folders, where each folder contains related components, styles, and other assets. This structure helps in scaling the project and keeps it easy to manage as it grows. You should also aim to keep components small and reusable, follow a consistent naming convention, and use hooks to manage state and side effects.

// For example, in a large project, you might have folders like components, pages, and utils:

// /src
//   /components
//     Button.js
//     Input.js
//   /pages
//     HomePage.js
//     AboutPage.js
//   /hooks
//     useForm.js
//   /utils
//     api.js
//   /styles
//     main.css

// In this structure, each component, like Button.js, only handles its own logic and UI, making it easier to test and update. Pages like HomePage.js represent complete views and use multiple components. Custom hooks like useForm.js handle specific logic, like form validation, and can be reused across the app.

// This modular approach keeps the project organized, helps developers find and fix issues quickly, and makes it easier for multiple developers to work on different parts of the project simultaneously.




// 14. How does the Virtual DOM work in React?
// ---------------------------------------------
// The Virtual DOM in React is a lightweight copy of the actual DOM. When a component's state or props change, React first updates the Virtual DOM, which is faster than updating the real DOM. After this, React compares the new Virtual DOM with the previous one, a process called reconciliation. It then calculates the difference and only updates the parts of the real DOM that have changed, making the app more efficient.

// For example, if you have a counter that changes the displayed value when clicked, React will update the Virtual DOM first and then only update the real DOM where the count value has changed.

// Example:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// export default Counter; When the button is clicked, React updates the count state. The Virtual DOM is updated first, and then React updates only the <p> tag that displays the count in the real DOM. This makes updates faster and more efficient because it avoids unnecessary re-rendering of unchanged elements




// 15. How does React’s reconciliation algorithm work?
// ---------------------------------------------------------
// React’s reconciliation algorithm is the process that helps React efficiently update the user interface when the state or props of a component change. It works by comparing the new Virtual DOM with the previous one and figuring out the smallest number of changes needed to update the real DOM. This process is called diffing. When React detects a change, it tries to minimize the updates to only the parts of the DOM that have changed, improving performance.

// For example, when you update a counter in a component, React will compare the new Virtual DOM with the previous one. If only the counter value changes, React will update only that part of the DOM, without re-rendering the entire component.
// Example:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// export default Counter; In this example, when the button is clicked, React will only update the <p> tag displaying the count, instead of re-rendering the entire <div>. This is how React’s reconciliation algorithm efficiently handles updates, improving performance by minimizing unnecessary changes to the DOM.




// 16. Explain how `React.StrictMode` works and its purpose.
// ------------------------------------------------------------
// React.StrictMode is a tool in React that helps identify potential problems in your application during development. It doesn't affect the app in production but enables extra checks and warnings in development mode to make your code more reliable. It helps spot things like unsafe lifecycle methods, deprecated APIs, and potential performance issues. When wrapped around your components, it activates these checks without changing the actual behavior of your app.

// For example, if you have an outdated lifecycle method or a side effect that should be cleaned up, React.StrictMode will warn you about it in the console, helping you improve your code quality.
// Example:

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello, World!</div>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// In this example, React.StrictMode is wrapping the App component. It will run extra checks and highlight any issues, such as using outdated APIs or improper patterns, making it easier to maintain and debug your app during development.




// 17. How do you prevent unnecessary re-renders in React?
// --------------------------------------------------------
// To prevent unnecessary re-renders in React, you can use several techniques to ensure that your components only re-render when necessary. One common approach is to use React.memo for functional components, which prevents re-renders if the props haven't changed. For class components, you can use shouldComponentUpdate to control whether the component should re-render based on changes in state or props.

// For example, using React.memo, you can wrap a component to prevent it from re-rendering unless its props change.
// Example:

import React, { useState } from 'react';

const MemoizedComponent = React.memo(({ count }) => {
  console.log('Component re-rendered');
  return <p>Count: {count}</p>;
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div>
      <MemoizedComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName(name === 'John' ? 'Doe' : 'John')}>Change Name</button>
    </div>
  );
}

// In this example, the MemoizedComponent will only re-render when the count prop changes. Clicking the "Change Name" button won't trigger a re-render of MemoizedComponent because the count hasn't changed. This prevents unnecessary re-renders and improves performance.




// 18. Explain how to debounce or throttle a function in React.
// ---------------------------------------------------------------

// Debouncing and throttling are techniques used to limit how often a function is called, especially for high-frequency events like typing or scrolling. Debouncing delays the execution of the function until after a specified time has passed since the last event, while throttling ensures the function is called at most once every specified interval.

// For example, if you're handling a search input and want to avoid calling the search function too often, you can debounce it so the function only runs after the user stops typing for a set period.
// Example (Debounce):

import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = debounce((event) => {
    console.log('Searching for:', event.target.value);
  }, 500);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e);
        }}
        placeholder="Search..."
      />
    </div>
  );
}

// In this example, handleSearch is debounced using the debounce function, so it only runs 500 milliseconds after the user stops typing, instead of on every keystroke. This reduces unnecessary function calls, improving performance.




// 19. What are prop types, and why are they used in React?
// -----------------------------------------------------------

// Prop types in React are a way to specify the expected types of props that a component should receive. They help catch bugs by ensuring that the correct data types are passed to the component, making the code more predictable and easier to maintain. React provides a built-in package called prop-types that allows you to define these types for your component props. If the wrong type of data is passed, React will warn you in development mode.

// For example, if you have a component that expects a string as a prop, you can define it using PropTypes.string to ensure that only a string is passed.
// Example:

import React from 'react';
import PropTypes from 'prop-types';

function WelcomeMessage({ name }) {
  return <h1>Hello, {name}!</h1>;
}

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired
};

// In this example, WelcomeMessage expects the name prop to be a string. If a non-string value is passed, React will show a warning in the console. This helps prevent errors and improves code reliability.




// 20. How do you manage side effects in a React app?
// ------------------------------------------------------
// In React, side effects are operations that can affect something outside of the component, like data fetching, timers, or manual DOM manipulation. These are managed using the useEffect hook. useEffect runs after the component renders, and you can use it to handle side effects. By default, useEffect runs after every render, but you can control when it runs by providing dependencies (values that trigger the effect when they change).

// For example, if you want to fetch data from an API when the component mounts, you can use useEffect to perform the fetch operation.
// Example:

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means this effect runs only once after the first render

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// In this example, useEffect is used to fetch data from an API when the component first renders. The empty dependency array [] ensures that the effect runs only once. Managing side effects with useEffect helps keep your components clean and focused on rendering, while side effects like data fetching or subscriptions are handled separately.


// 21. How does the `useReducer` Hook work, and when would you use it?
// -------------------------------------------------------------------

// The useReducer hook is a React hook used to manage state in more complex components. It works similarly to useState, but instead of just updating the state directly, you dispatch actions to a reducer function, which then determines how the state should change based on the action. This is particularly useful for managing more complex state logic or when the next state depends on the previous state.

// You would use useReducer when you need more control over how the state updates, such as handling multiple actions or managing state with more complex transitions.
// Example:

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

// In this example, useReducer is used to manage the count state. Instead of directly setting the state, we dispatch actions like increment or decrement, and the reducer function updates the state accordingly. This makes it easier to manage complex state changes, especially when you have multiple actions and state transitions.




// 22. Explain how to create and use custom hooks.
// --------------------------------------------------
// A custom hook is a function that lets you reuse logic in React. It allows you to share state and behavior across multiple components without repeating code. Example: 
// Custom Hook for Local Storage: Let's create a custom hook to store data in localStorage.

// Custom Hook Code (useLocalStorage.js):
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const savedValue = localStorage.getItem(key);
  const [value, setValue] = useState(savedValue ? JSON.parse(savedValue) : initialValue);

  const setData = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setData];
}


// Using Custom Hook (App.js):
import React from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}  // Update localStorage
      />
      <p>{name}</p>
    </div>
  );
}

// Explanation: The useLocalStorage hook manages data in localStorage. App uses this hook to store and retrieve a name, allowing changes to be saved across sessions.

