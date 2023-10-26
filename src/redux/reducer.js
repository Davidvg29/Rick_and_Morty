import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./action-types"

const initialStore = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialStore, action)=>{
    switch (action.type) {
        case ADD_FAV:
            return {...state, 
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters:[...state.allCharacters, action.payload]}

        case REMOVE_FAV:
            let remove = state.myFavorites.filter((favorite)=>{
                return favorite.id !== parseInt(action.payload)}
            )
            return {...state, myFavorites: remove, allCharacters: remove}
        
            case FILTER:
            let copy2 = [...state.allCharacters];

                if (action.payload === 'All') {
                    return {
                    ...state,
                    myFavorites: copy2,
                    };
                }

                let filtered = copy2.filter((favorite) => {
                    return favorite.gender === action.payload;
                });

                return {
                    ...state,
                    myFavorites: filtered,
                };

        case ORDER:
            let verificacion = state.allCharacters.sort((a, b)=>{
                if (action.payload === "A") {
                    return a.id-b.id
                }else if(action.payload === "D"){
                    return b.id-a.id
                }
                
            })
            return{...state, myFavorites: verificacion}

        default:
            return {...state}
    }
}

export default reducer