import React from 'react'

function Numbers({ persons, filter }) {
  return (
    <div>
      {
        persons
          .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
          .map(person => <p key={person.name}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default Numbers
