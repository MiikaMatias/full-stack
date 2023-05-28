const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.name[0]} exercises = {props.exercises[0]}/>
      <Part name = {props.name[1]} exercises = {props.exercises[1]}/>
      <Part name = {props.name[2]} exercises = {props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10,7,14]

  return (
    <div>
      <Header course = {course}/>
      <Content name = {parts} exercises = {exercises}/>
      <Total sum = {exercises[0] + exercises[1] + exercises[2]}/>
    </div>
  )
}

export default App