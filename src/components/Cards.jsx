import Card from './Card';
import "./Cards.css"


export default function Cards({characters, onClose}) {
   return <div className="Cards">
      {characters.map((character)=>(
         <Card 
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={onClose}
         id={character.id}

         />
      ))}
   </div>;
}
