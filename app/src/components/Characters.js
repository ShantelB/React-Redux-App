import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../store/actions/index";

const Characters = props => {
// console.log (props.pokemon)
  useEffect(() => {
    props.fetchPokemon();
  }, [props.fetchPokemon]);
console.log(props.fetchPokemon)
  return (
    <main>
      
  <h1>Pokemon</h1>
  {/* {props.isFetching && <h3>Fetching data...</h3>} */}
  {props.pokemon.map( card => (<div className='cards'> <h2 key={card.id}>{card.name}</h2> 
  <img src={card.imageUrlHiRes} width='500' height='500'/>
</div>
  ))}
  
    </main>
  );
};

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    pokemon: state.pokemon,
    error: state.error
})

export default connect(mapStateToProps, {fetchPokemon}) (Characters);