import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemon = () => {

    return dispatch => {
        dispatch({ type: FETCH_POKEMON_START});
        
        axios.get('https://api.pokemontcg.io/v1/cards')
        .then(response => {
            console.log(response.data.cards)
            dispatch({ type: FETCH_POKEMON_SUCCESS, payload: response.data.cards})
        })
        .catch(err => dispatch({ type: FETCH_POKEMON_FAILURE, payload:`${err.response.status} ${err.response.data}`}))
    }
}