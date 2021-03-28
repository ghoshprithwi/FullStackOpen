import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';

function App() {
  const [persons, setPersons] = useState([
    { name: 'John Doe', number: '+91-123456' },
    { name: 'Jane Doe', number: '+973-87979' },
    { name: 'Marie Jensen', number: '+91-99012' },
    { name: 'Aliah Pitts', number: '+93-236-125' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  //adds a new name to the persons list
  const addName = (event) => {
    event.preventDefault();

    const newNameObject = { name: newName, number: newNumber };
    const nameList = persons.map(person => person.name);

    if (nameList.includes(newName)) {
      alert(`${newName} already exists.`);
    } else {
      setPersons(persons.concat(newNameObject));
    }

    setNewName('');
    setNewNumber('');
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h3>Add New Number</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Numbers persons={persons} filter={filter} />
    </div>
  );
}

export default App;
