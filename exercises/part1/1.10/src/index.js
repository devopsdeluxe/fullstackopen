import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  const updateFeedback = props.updateFeedback;
  let value = props.value;
  let sentiment = props.sentiment;

  return (
    <div>
      <button onClick={() => updateFeedback(value + 1)}>{sentiment}</button>
    </div>
  );
};

const Statistic = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

const Statistics = (props) => {
  let good = props.good;
  let neutral = props.neutral;
  let bad = props.bad;
  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let positive = good / all;

  let collected = (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <p>all {all}</p>
      <p>average {isNaN(average) ? 0 : average}</p>
      <p>positive {isNaN(positive) ? 0 : positive}</p>
    </div>
  );

  let waiting = (
    <div>
      <p>No feedback given</p>
    </div>
  );

  return all === 0 ? waiting : collected;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button updateFeedback={setGood} value={good} sentiment="good" />
      <Button updateFeedback={setNeutral} value={neutral} sentiment="neutral" />
      <Button updateFeedback={setBad} value={bad} sentiment="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
