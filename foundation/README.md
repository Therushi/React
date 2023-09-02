## TYPES OF REACT COMPONENTS

- CLASS BASED COMPONENT
- FUNCTION BASE COMPONENT

> What is React Element

```javascript
// This is React Element
const heading = <h1 className="headingId">This is React Element</h1>;

// While rendering the element we can render like this
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

> What is React Component?

```javascript
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 id="headingId">This is React Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how we render the component
root.render(<HeadingComponent />);
```

> What is component composition?

```javascript
// Heading Component
const Heading = () => {
  return (
    <h1 className="head" tabIndex="5">
      Hello Rushi
    </h1>
  );
};

// This is component composition calling Heading inside MainComponent
const MainComponent = () => {
  return (
    <div id="container">
      <Heading />
      <h1>Functional Component </h1>
    </div>
  );
};
```

> How you call React Component in a 3 Ways

```javascript
const Heading = () => (
  <h1 className="headingId" id="headingId">
    This is React Element
  </h1>
);

const MainComponent = () => {
  return (
    <div id="container">
      // ############################################
      {Heading()} // Call it as a function
      <Heading /> // Call it as self closing tag
      <Heading></Heading> // call it as a normal tag
      <h1>Functional Component </h1>
    </div>
  );
};
// While rendering the element we can render like this
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
```

> > ## In JSX in curely braces { We can execute any javascript } Thts why we can call the component fuction directly like {Heading()}
