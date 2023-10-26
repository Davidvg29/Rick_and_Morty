import {Link} from "react-router-dom"
import { addFav, removeFav} from "../../redux/action"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import css from "./Card.module.css"

export function Card({ 
   onClose, 
   name, 
   status, 
   species, 
   gender, 
   origin, 
   image,
   id,
   addFav,
   removeFav,
   myFavorites
}) {
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite=()=>{
      const character = {
         id,
         name, 
         status, 
         species, 
         gender, 
         origin, 
         image,
      }
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav(character)
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleRemove=(id)=>{
      onClose(id)
      removeFav(id)
   }

   return (
      <div className={css.Card}>
         <img className={css.img} src={image} alt='imagen' />
         {
          isFav ? (
             <button className={css.favButton} onClick={handleFavorite}>❤️</button>
            ) : (
             <button className={css.favButton} onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={css.information}>
            <div className={css.divButtonClose}><button className={css.buttonClose} onClick={()=>handleRemove(id)}>x</button></div>
            <Link className={css.linkName} to={`/detail/${id}`}>
               <h4 className={css.name}>{name}</h4>
            </Link>
            <h4 className={css.h4Information} >{status}</h4>
            <h4 className={css.h4Information} >{species}</h4>
            <h4 className={css.h4Information} >{gender}</h4>
            <h4 className={css.h4Information} >{origin}</h4>
         </div>
      </div>
   );
}


export const mapStateToProps = (state)=>{
    return{
      myFavorites: state.myFavorites
    }
}

export const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(character)=>{
         dispatch(addFav(character))},
      removeFav:(id)=>{
         dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
