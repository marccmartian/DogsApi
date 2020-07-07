import React from 'react';

const RandomDogs = ({ images }) => {
  return (
    <div>
      {
        images.map(image => (
          <img src={image} alt="dog" />
        ))
      }
    </div>
  )
}

export default RandomDogs;