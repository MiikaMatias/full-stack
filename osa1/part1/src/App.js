const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

function namegen() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// Root component
const App = () => {
  console.log(namegen())
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = {namegen()+namegen()+namegen()+namegen()}/>
    </div>
  )
}

export default App