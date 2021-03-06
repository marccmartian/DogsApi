import React, { useState, useEffect } from 'react';
import RandomDogs from './components/RandomDogs';
import SelectBreed from './components/SelectBreed';
import Load from './components/Load';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);

  //request only one breed
  useEffect(() => {
    setLoading(true)
    const getBreed = async (breed) => {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`);
      const data = await response.json();
      setImages(data.message);
      setLoading(false);
    }
    //si no hay data en breed retorna nada, entonces se muestra las imgenes random
    if (!breed) {
      setLoading(false);
      return;
    };
    getBreed(breed);
  }, [breed]);

  //Request list all breeds
  useEffect(() => {
    const getAllBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    }
    getAllBreeds();
  }, []);

  //request top ten list of randon dog's images
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
      <SelectBreed breeds={breeds} selectedBreed={setBreed} />
      {
        loading ? <Load /> : <RandomDogs images={images} />
      }
    </div>
  );
}

export default App;
