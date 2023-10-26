import {Link} from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import {filterCards, orderCards} from "../../redux/action"
import { Card } from "../card/Card"
import { useState } from "react"
import css from "./favorites.module.css"

export const Favorites=()=>{

    const [aux, setAux]= useState(false)
    const dispatch = useDispatch()
    const myFavorites = useSelector((state) => state.myFavorites);

    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }
    const handleFilter = (e)=>{
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={css.conteiner}>

            <div className={css.divSelect}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknownn">unknownn</option>
            </select>
            </div>
            
            <div className={css.divCardsFav}>
            {myFavorites?.map(({
                id,
                name,
                status,
                species,
                gender,
                origin,
                image})=>(
                    <div className={css.CardFav}>
                    <img className={css.imgFav} src={image} alt='imagen' />
                    {/* {
                     isFav ? (
                        <button className={css.favButton} onClick={handleFavorite}>❤️</button>
                       ) : (
                        <button className={css.favButton} onClick={handleFavorite}>🤍</button>
                       )
                    } */}
                    <div className={css.informationFav}>
                       {/* <div className={css.divButtonClose}><button className={css.buttonClose} onClick={()=>handleRemove(id)}>x</button></div> */}
                       <Link className={css.linkNameFav} to={`/detail/${id}`}>
                          <h4 className={css.nameFav}>{name}</h4>
                       </Link>
                       <h4 className={css.h4InformationFav} >{status}</h4>
                       <h4 className={css.h4InformationFav} >{species}</h4>
                       <h4 className={css.h4InformationFav} >{gender}</h4>
                       <h4 className={css.h4InformationFav} >{origin}</h4>
                    </div>
                 </div>
        ))}
            </div>
        </div>
    )
}

export default Favorites

// export const mapStateToProps=(state)=>{
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites)