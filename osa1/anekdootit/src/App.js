import { useState } from 'react'

function randomValue(list) {
  return Math.floor(Math.random() * list.length)
}

function addVote(votes, selected) {
  const votescopy = [...votes]
  votescopy[selected] += 1
  return votescopy
}

function indexOfMaxVote(list) {
  return list.reduce((maxIndex, currentElement, currentIndex, arr) => {
    if (currentElement > arr[maxIndex]) {
      return currentIndex;
    } else {
      return maxIndex;
    }
  }, 0);
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(randomValue(anecdotes))
  const [maxvote, setMaxVote] = useState(selected)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const handleAnecdote = () => {
    setSelected(randomValue(anecdotes))
  }

  const handleMaxVote = () => {
    setMaxVote(indexOfMaxVote(votes))
  }

  const handleVote = () => {
    setVotes(addVote(votes, selected))
    handleMaxVote()
  }

  console.log(votes)

  return (
    <div>
      <h1>Anecdote</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <button onClick={handleAnecdote}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[maxvote]}
      </div>
    </div>
  )
}

export default App
