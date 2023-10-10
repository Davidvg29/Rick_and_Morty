import {Routes, Route, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import Footer from './components/Footer.jsx';
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error.jsx";
import Form from "./components/Form.jsx";

// import Card from './components/Card.jsx';
// import SearchBar from './components/SearchBar.jsx';
//Al import de abajo lo usaba para obtener los datos al principio, ya nno sirve;)
//import characters, { Rick } from './data.js';

function App() {
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const email = "davidpivito@gmail.com"
   const password = "password"

   

   function onSearch(id){
      
      axios(`https://rickandmortyapi.com/api/character/${id}?key=pi-davidvg29`)
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
   
   function login(userData){
      if(userData.email===email && userData.password===password){
         setAccess(true)
         navigate("/home")
      }else{alert("datos incorrectos")}
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/" element={
               <Form login={login}/>}/>
            <Route path="/home" element={
               <Cards characters={characters} 
               onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Error/>}/>
         </Routes>
         <Footer/>
      </div>
   );
}

export default App;
