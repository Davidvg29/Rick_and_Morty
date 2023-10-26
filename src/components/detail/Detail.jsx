import React from 'react';
import css from "./Detail.module.css"
import axios from "axios"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
 
function Detail() {
    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-davidvg29`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return ( 
        <div className={css.divDetail} >
           <div className={css.detail}> 
      {character.name && (
        <>
          <h2>{character.name}</h2>
          <img className={css.imgDetail} src={character.image} alt={character.name} />
          <h2 className={css.h2detail} >{character.status}</h2>
          <h2 className={css.h2detail} >{character.species}</h2>
          <h2 className={css.h2detail} >{character.gender}</h2>
          <h2 className={css.h2detail} >{character.origin?.name}</h2>
        </>
      )}
    </div>
        </div>
     );
}

export default Detail;