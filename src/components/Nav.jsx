import {Link, useLocation} from "react-router-dom"
import SearchBar from './SearchBar.jsx';
import "./Nav.css"

export default function Nav(props){
    const location = useLocation()
    const emptyLocation = location.pathname==="/"

    return ( 
        !emptyLocation && (
            <div className="nav">
            <SearchBar onSearch={props.onSearch}/>
            <div>
            <Link to="/home" ><button className="buttonNav">Home</button></Link>
            <Link to="/about" ><button className="buttonNav">About</button></Link>
            </div>
        </div>
        ) 
    )
        
    
}