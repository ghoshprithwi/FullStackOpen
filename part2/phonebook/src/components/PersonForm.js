import React from 'react'

function PersonForm(props) {
  return (
    <div>
      <form onSubmit={props.addName}>
        <div>name: <input type="text" value={props.newName} onChange={props.handleNameChange} /></div>
        <div>number: <input type="text" value={props.newNumber} onChange={props.handleNumberChange} /></div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default PersonForm
