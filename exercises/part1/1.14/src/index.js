import React, { useState } from "react";
import ReactDOM from "react-dom";

const NewAnecdoteButton = ({ selected, setSelected }) => {
  const newAnecdote = () => {
    let index = selected;
    while (index === selected) {
      index = Math.floor(Math.random() * 6);
    }

    setSelected(index);
  };

  return (
    <div>
      <button onClick={() => newAnecdote()}>next anecdote</button>
    </div>
  );
};

const VoteButton = ({ anecdote, votes, setVotes }) => {
  const votes_copy = [...votes];

  const newVote = (votes_copy) => {
    votes_copy[anecdote] += 1;

    setVotes(votes_copy);
  };

  return (
    <div>
      <button onClick={() => newVote(votes_copy)}>vote</button>
    </div>
  );
};

const App = (props) => {
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <VoteButton anecdote={selected} votes={votes} setVotes={setVotes} />
      <NewAnecdoteButton selected={selected} setSelected={setSelected} />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[votes.indexOf(Math.max(...votes))]}
      <br />
      has {Math.max(...votes)} votes
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
