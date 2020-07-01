import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    const course = props.course.name;

    return <h1>{course}</h1>;
  };

  const Part = (props) => {
    const part = props.part;

    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };

  const Content = (props) => {
    const parts = props.course.parts;

    // Suppress:
    //   "Warning: Each child in a list should have a unique “key” prop"
    // message:
    return parts.map((part) => {
      return <Part part={part} />;
    });
  };

  const Total = (props) => {
    const parts = props.course.parts;

    let total = parts.reduce((total, section) => {
      return total + section.exercises;
    }, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
