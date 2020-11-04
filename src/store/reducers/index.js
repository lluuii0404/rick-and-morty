import { combineReducers } from 'redux';
import { charactersReducer } from "./reducerAllCharacters";
import { detailsCharacterReducer } from "./reducerDetailsCharacter";


const rootReducer = combineReducers({
  characters: charactersReducer,
  details: detailsCharacterReducer
});

export default rootReducer;

