import { useState } from "react";
import css from "./SearchBar.module.css"

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
      <div className={css.SearchBar}>
         <h1 className={css.h1SearchBar} >Rick and Morty</h1>
         <div className={css.accioner}>
            <input className={css.inputSearchBar} type='search' value={id} onChange={handleChange} id="inputSearch" placeholder="Search by ID"/>
            <button className={css.buttonSearchBar} onClick={()=>handleSearch(id)}>Add</button>
            <button className={css.buttonSearchBar} onClick={random}>Random</button>
         </div>
      </div>
   );
}
