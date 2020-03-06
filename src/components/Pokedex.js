import React from 'react'


//Renders each Pokemon in the pokedex by mapping the props from the parent to the child
const PokedexList = ({selectPokemon,pokemonList}) => {
    const response = pokemonList.map((poke) => {
        return(
            <div className="three wide column card" key={poke.id} 
                onClick={() => selectPokemon(poke)}
            >
                <div className="image">
                    <img src={poke.img}></img>
                </div>
                <div className="content">
                    <div className="ui grid">
                        <div className="two column row">
                            <div className="column">
                                <b>{poke.name}</b>
                            </div>
                            <div className="column">
                                <b>ID:</b> {parseInt(poke.num, 10)}
                            </div>
                        </div>
                    </div>
                    <div className="ui grid" style={{paddingTop:"20px"}}>
                        <div className="two column row">
                            <div className="column">
                                <b>Types:</b>
                                    {poke.type.map((type,index) => {
                                        return(
                                            <div key={index}> {type}</div>
                                        )
                                    })}
                            </div>
                            <div className="column">
                                <b>Weaknesses:</b>
                                    {poke.weaknesses.map((weakness,index) => {
                                        return(
                                            <div key={index}> {weakness}</div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="ui cards container grid">
            {response}
        </div>
    )
}

export default PokedexList