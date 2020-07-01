import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  const Header = (props) => {
    const course = props.course;

    return <h1>{course}</h1>;
  };

  const Part = (props) => {
    const section = props.section;

    return (
      <p>
        {section.name} {section.exercises}
      </p>
    );
  };

  const Content = (props) => {
    const parts = props.parts;

    // Suppress:
    //   "Warning: Each child in a list should have a unique “key” prop"
    // message:
    return parts.map((part) => {
      return <Part key={part.name} section={part} />;
    });
  };

  const Total = (props) => {
    const parts = props.parts;

    let total = parts.reduce((total, section) => {
      return total + section.exercises;
    }, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
