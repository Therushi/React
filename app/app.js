import React from "react";
import ReactDOM from "react-dom";

const heading = (
  <h1 className="headingClass" id="headingId">
    This is React Element
  </h1>
);

const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 id="headingId">This is React Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
