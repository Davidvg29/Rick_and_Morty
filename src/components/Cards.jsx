import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map((characters)=>(
         <Card key={characters.id}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               name={characters.name}
               status={characters.status}
               species={characters.species}
               gender={characters.gender}
               origin={characters.origin.name}
               image={characters.image}

         />
      ))}
   </div>;
}
