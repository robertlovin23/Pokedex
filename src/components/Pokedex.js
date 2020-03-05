import React from 'react'

const PokedexList = ({selectPokemon,pokemonList}) => {
    const response = pokemonList.map((poke) => {
        return(
            <div className="card" key={poke.id} 
                style={{marginRight:"70px", alignContent: "center"}}  
                onClick={() => selectPokemon(poke)}
            >
                <div className="image">
                    <img style={{height:"200px", width: "280px"}} src={poke.img}></img>
                </div>
                <div className="content">
                    <b>{poke.name}</b>
                    <br/>
                    {poke.num}

                    <br/>
                    <b>Types:</b>
                        {poke.type.map((type,index) => {
                            return(
                                <div key={index}> {type}</div>
                            )
                        })}
                    <br/>
                    <b>Weaknesses:</b>
                        {poke.weaknesses.map((weakness,index) => {
                            return(
                                <div key={index}> {weakness}</div>
                            )
                        })}
                </div>
            </div>
        )
    })
    return(
        <div className="ui cards container">
            {response}
        </div>
    )
}

export default PokedexList