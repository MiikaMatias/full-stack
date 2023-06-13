const Persons = (props) => {
    return (
    <ul>
    {props.filteredPersons.map(person => 
     <li className='note' 
        key={person.id}>{person.person} {person.number}
        <button onClick={() => props.deletePerson(person.id)}>delete</button>
     </li>
    )}
    </ul>
    )
}

export default Persons