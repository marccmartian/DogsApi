import React from 'react';

const RandomDogs = ({ images }) => {
  return (
    <div>
      {
        images.map((image, index) => (
          <img src={image} alt="dog" key={index} />
        ))
      }
    </div>
  )
}

export default RandomDogs;