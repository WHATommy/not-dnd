import {
    GET_ERRORS,
    GET_CHARACTER,
    CREATE_CHARACTER,
    EDIT_CHARACTER,
    DELETE_CHARACTER
} from './Types';
import Axios from 'axios';
import SetAuthToken from '../utils/SetAuthToken'

export const createCharacter = dispatch => {
    Axios
        .post('/api/character/')
        .then(res =>
            dispatch({
                type: CREATE_CHARACTER,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

