import React from 'react'

const SelectBreed = ({ breeds, selectedBreed }) => {
  const handleChange = (event) => {
    selectedBreed(event.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select a breed</option>
        {
          breeds.map(breed => (
            <option value={breed} key={breed} >{breed}</option>
          ))
        }
      </select>
    </div >
  )
}

export default SelectBreed;