import React, { useState } from 'react';

const MostVotedAnecdote = ({ points, anecdotes }) => {
  if (points.every((el) => el === 0)) {
    return (
      <p>No votes yet.</p>
    )
  }
  let max = points.indexOf(Math.max(...points));
  return (
    <div>
      <p>{anecdotes[max]}</p>
      <p>has {points[max]} votes</p>
    </div>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Adding manpower to a late software project makes it later!',
    'Before software can be reusable it first has to be usable.',
    'Why do we never have time to do it right, but always have time to do it over?.',
    'Good judgment comes from experience, and experience comes from bad judgment.',
    'Simplicity is the soul of efficiency.'
  ]

  const [selected, setSelected] = useState(0);
  const inititalList = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(inititalList);

  const handleClick = () => {
    const randNum = Math.round(Math.random() * (anecdotes.length - 1));
    setSelected(randNum);
  }

  const handleVoteClick = () => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <MostVotedAnecdote points={points} anecdotes={anecdotes} />
    </div>
  );
}

export default App;
