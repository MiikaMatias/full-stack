import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import SearchQuery from './components/SearchQuery'
import Phonebook from './components/Phonebook'
import PersonService from './services/Persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([
    { person: 'Arto Hellas',
      number: '0443110719',
      id: 0
     }
  ]) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    console.log('effect')
    PersonService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  function findIdByName(name) {
    return persons.find((person) =>{
      return person.person === name
    })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      person: newPerson,
      number: newNumber,
      id: persons.length+1
    }  
    if (persons.some((person) => person.person === newPerson)) {
      PersonService
        .update(findIdByName(personObject.person).id,personObject)
        .then(response => {
          console.log('succesfully changed')
        })
        .catch(error =>{
          alert('Name already deleted')
        })
      window.location.reload()
    } else {
      setPersons(persons.concat(personObject))
      PersonService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
          setNewPerson('')
      })
    }
    setNewPerson('')  
    setNewNumber('')  
    setNotification(`${newPerson} added`)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const deletePerson = (id) => {
    if (window.confirm(`Delete entry ${id}? Are you sure?`)) {
      PersonService
        .remove(id)

      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearchQuery(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.person.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div>
      <Notification {... {notification}}/>
      <SearchQuery {...{ searchQuery, handleSearchChange}}/>
      <Phonebook {...{ addPerson, newPerson, newNumber, handlePersonChange, handleNumberChange }} />
      <Persons {...{ filteredPersons, deletePerson}}/>
    </div>
  )
}

export default App