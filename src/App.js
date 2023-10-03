import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [pokemon, setPokemons] = useState([]);

  async function getAllPokemons() {
    await axios.get("https://pokeapi.co/api/v2/pokemon")

    .then (response => {
      setPokemons(response.data.results);
      console.log(response);
    })
    .catch(error=>{
      console.log('Error', error)
    })
  }
  useEffect(() => {
    getAllPokemons();
  }, []);
 
  const arrayQualque=[10,11,12,13,14,15]

  return (
    <div>
      <ul>
        {arrayQualque.map((numeros,index)=>(
          <li key={index}>
            {numeros}
          </li>
        ))}
        
      </ul>

      <ul>
        {pokemon.map((pokemons, index) => (
          <li key={index}>
            {pokemons.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
