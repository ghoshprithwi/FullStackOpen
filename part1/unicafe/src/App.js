import React, { useState } from 'react'

//Parent Statistics Component
const Statistics = ({ allFeedback }) => {

  if (allFeedback.good === 0 && allFeedback.neutral === 0 && allFeedback.bad === 0) {
    return (
      <tr><td>No feedback given.</td></tr>
    )
  }
  const totalFeedback = allFeedback.good + allFeedback.neutral + allFeedback.bad;
  const totalScore = (allFeedback.good + (allFeedback.bad * -1));

  return (
    <>
      <Statistic text="good" value={allFeedback.good} />
      <Statistic text="neutral" value={allFeedback.neutral} />
      <Statistic text="bad" value={allFeedback.bad} />
      <Statistic text="all" value={totalFeedback} />
      <Statistic text="average score" value={totalScore / totalFeedback} />
      <Statistic text="positive" value={(allFeedback.good / totalFeedback) * 100 + " %"} />
    </>
  )
}

//Helper Component for displaying each statistic
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedback = { good, neutral, bad };

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistics allFeedback={allFeedback} />
        </tbody>
      </table>
    </div>
  )
}

export default App