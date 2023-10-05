import SearchBar from './SearchBar.jsx';
import "./Nav.css"

export default function Nav(props){
    return (
        <div className="nav">
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}