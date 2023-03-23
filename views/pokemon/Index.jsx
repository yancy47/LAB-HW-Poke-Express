import React from "react";

const myStyle = {
    color: 'purple',
    backgroundColor: 'lightblue'
    };
    
function Index(props){ // props passed is pokemon 
    return(
        <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
                {props.pokemon.map((pokemon, x) => 
                <li>
                    <a href={`/pokemon/${x}`}><strong>{pokemon.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/pokemon/new">Add Pokemon</a>
            
        </div>
    )
}

export default Index;