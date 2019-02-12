import { CREATE_CHARACTER } from '../actions/Types';
import isEmpty from '../validation/Is-Empty';

const initialState = {
    class: '',
    background: '',
    race: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_CHARACTER:
            return {
                ...state,
                class: !isEmpty(action.payload.class),
                background: !isEmpty(action.payload.background),
                race: !isEmpty(action.payload.race),
            }
        default:
            return state
    }
}


