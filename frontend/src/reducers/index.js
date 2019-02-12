import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CharacterCreationReducer from './CharacterCreationReducer';
import MyCharacterReducer from './MyCharacter';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
    auth: AuthReducer,
    characterCreation: CharacterCreationReducer
    /*myCharacter: MyCharacterReducer,
    errors: ErrorReducer*/
})