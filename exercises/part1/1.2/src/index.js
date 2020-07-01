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
    const title = props.title;

    return <h1>{title}</h1>;
  };

  const Part = (props) => {
    const section = props.section;

    return (
      <p>
        {section.name} {section.exercise_count}
      </p>
    );
  };

  const Content = (props) => {
    const sections = props.sections;

    // Suppress:
    //   "Warning: Each child in a list should have a unique “key” prop"
    // message:
    return sections.map((section) => {
      return <Part key={section.name} section={section} />;
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
