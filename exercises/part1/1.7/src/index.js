import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(good + 1);
  };

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  };

  const updateBad = () => {
    setBad(bad + 1);
  };

  const All = () => {
    return good + neutral + bad;
  };

  const Average = () => {
    let average = (good - bad) / (good + neutral + bad);
    return isNaN(average) ? 0 : average;
  };

  const Positive = () => {
    let positive = good / All();
    return isNaN(positive) ? 0 : positive;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => updateGood()} text="good" />
      <Button handleClick={() => updateNeutral()} text="neutral" />
      <Button handleClick={() => updateBad()} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {All()}</p>
      <p>average {Average()}</p>
      <p>positive {Positive()}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
