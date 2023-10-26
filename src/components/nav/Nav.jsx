import css from "./nav.module.css"
import {Link,NavLink, useLocation} from "react-router-dom"
import SearchBar from '../searchBar/SearchBar.jsx';

export default function Nav(props){
    const location = useLocation()
    const emptyLocation = location.pathname==="/"

    return ( 
        !emptyLocation && (
            <div className={css.nav}>
            <SearchBar onSearch={props.onSearch}/>
            <div className={css.divLink}>
            <Link to="/home" ><button className={css.buttonNav}>Home</button></Link>
            <Link to="/about" ><button className={css.buttonNav}>About</button></Link>
            <Link to="/favorites"><button className={css.buttonNav}>Favorites</button></Link>
            </div>
        </div>
        ) 
    )
    
}