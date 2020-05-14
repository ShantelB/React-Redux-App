import {FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE} from '../actions/index';

const initialState = {
    isFetching: false,
    pokemon: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_START: 
        return{
            ...state,
            isFetching: true
        };
        case FETCH_POKEMON_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                isFetching: false,
                pokemon:action.payload
            }
            case FETCH_POKEMON_FAILURE:
                return{
                    ...state,
                    isFetching: false,
                    error:action.payload
                }
            
            default:
                return state
    }
}