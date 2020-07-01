import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const title = "Half Stack application development";
  const sections = [
    { name: "Fundamentals of React", exercise_count: 10 },
    { name: "Using props to pass data", exercise_count: 7 },
    { name: "State of a component", exercise_count: 14 },
  ];

  const Header = (props) => {
    const course = props.title;

    return <h1>{course}</h1>;
  };

  const Content = (props) => {
    const sections = props.sections;

    return sections.map((section) => {
      return (
        // Suppress:
        //   "Warning: Each child in a list should have a unique “key” prop"
        // message:
        <p key={section.name}>
          {section.name} {section.exercise_count}
        </p>
      );
    });
  };

  const Total = (props) => {
    const sections = props.sections;

    let total = sections.reduce((total, section) => {
      return total + section.exercise_count;
    }, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header title={title} />
      <Content sections={sections} />
      <Total sections={sections} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
