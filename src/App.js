import React, { useState, useEffect } from 'react';
import RandomDogs from './components/RandomDogs';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getRandomImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
      const data = await response.json();
      setImages(data.message);
    }
    getRandomImage();
  }, []);

  return (
    <div className="App">
      <h1>Find a Dog</h1>
      <RandomDogs images={images} />
    </div>
  );
}

export default App;
