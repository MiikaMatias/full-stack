const Phonebook = (props) => {
  return (
  <form onSubmit={props.addPerson}>
  <h2>Phonebook</h2>
  <div>
    name: 
    <input 
     value={props.newPerson} 
     onChange={props.handlePersonChange}
    />
    <div/>
    number: 
    <input 
     value={props.newNumber} 
     onChange={props.handleNumberChange}
    />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
  )
}

export default Phonebook