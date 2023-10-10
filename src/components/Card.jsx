import {Link} from "react-router-dom"
import "./Card.css"

export default function Card({ 
   onClose, 
   name, 
   status, 
   species, 
   gender, 
   origin, 
   image,
   id
}) {
   return (
      <div className="Card">
         <img src={image} alt='imagen' />
         <div className="information">
            <div className="divButtoClose"><button className="buttonClose" onClick={()=>onClose(id)}>X</button></div>
            <Link to={`/detail/${id}`}>
               <h4 className="name">{name}</h4>
            </Link>
            <h4>{status}</h4>
            <h4>{species}</h4>
            <h4>{gender}</h4>
            <h4>{origin}</h4>
         </div>
      </div>
   );
}
