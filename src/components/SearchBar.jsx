import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   function handleChange(event){
      const idEvent = event.target.value
      setId(idEvent)

   }

   function handleSearch(id){
      if (id>826) {
         window.alert("up to id 826")
      }else{
      onSearch(id)
      setId("")
   }}

   function random() {
      let random = parseInt(Math.random()*826)
      onSearch(random)
      setId("")
   }

   return (
      <div className="SearchBar">
         <h1>Rick and Morty</h1>
         <div className="accioner">
            <input className="" type='search' value={id} onChange={handleChange} id="inputSearch" placeholder="Search by ID"/>
            <button className="" onClick={()=>handleSearch(id)}>Add</button>
            <button className="" onClick={random}>Random</button>
         </div>
      </div>
   );
}
