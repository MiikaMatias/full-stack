

import { useState } from 'react'

function all(good, bad, neutral) {
  const all = parseInt(good) + parseInt(bad) + parseInt(neutral)
  return all;
}

function positive(good, bad, neutral) {
  const positive = parseInt(good)/all(good,bad,neutral)
  return positive*100
}

function average(good, bad, neutral) {
  const sum = parseInt(good) - parseInt(bad)
  const averageValue = sum / all(good, bad, neutral)
  return averageValue;
}

const Button = ({text, cmd}) => {
  return <button onClick={cmd}>{text}</button>
}

const StatisticLine = ({text, val}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{val}</td>
      </tr>
    )
}

const Statistics = ({ good, bad, neutral }) => {
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text={"good"} val={good}/>
        <StatisticLine text={"bad"} val={bad}/>
        <StatisticLine text={"neutral"} val={neutral}/>
        <StatisticLine text={"all"} val={all(good, bad, neutral)}/>
        <StatisticLine text={"average"} val={average(good, bad, neutral)}/>
        <StatisticLine text={"positive"} val={positive(good, bad, neutral)}/>
      </tbody>
      </table>
    </div>
  )
}

const History = ({good, bad, neutral}) => {
  if (all(good, bad, neutral) === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <Statistics good = {good} bad = {bad} neutral = {neutral}/>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <div>
          <Button text = {"good"} cmd={handleGood}/>
          <Button text = {"neutral"} cmd={handleNeutral}/>
          <Button text = {"bad"} cmd={handleBad}/>
        </div>
      <h1>statistics</h1>
      <History good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}


export default App
