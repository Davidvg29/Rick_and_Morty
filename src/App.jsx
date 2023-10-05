import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from "axios"
import Footer from './components/Footer.jsx';

// import Card from './components/Card.jsx';
// import SearchBar from './components/SearchBar.jsx';
//Al import de abajo lo usaba para obtener los datos al principio, ya nno sirve;)
//import characters, { Rick } from './data.js';

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id){
      
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            const exist = characters.find((character) => character.id === data.id)
            if(!exist){
               setCharacters((oldChars) => ([...oldChars, data]))}
               else{
                  window.alert("Existing character")}
            
         }
         else{window.alert("enter id correct")}
      })
         
      }
   
   function onClose(id){
      // setCharacters(characters.filter(character => character.id !== Number(id)))
      let idParseado = parseInt(id)

      //en react, algunos metodos de array cambian su sintaxis como filter lpm estuve dos horas en darme cuenta
      let filterCharacters = characters.filter(character=> character.id !== idParseado)
      setCharacters(filterCharacters)
   }

   return (
      <div className='App'>
         
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} 
               onClose={onClose}/>
         <Footer/>
      </div>
   );
}

export default App;
