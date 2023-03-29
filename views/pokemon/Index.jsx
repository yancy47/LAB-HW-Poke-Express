import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const myStyle = {
    color: 'purple',
    backgroundColor: 'lightblue'
    };
    
function Index(props){ // props passed is pokemon 
    return(
        <DefaultLayout title="Index View">
        <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
                {props.pokemon.map((pokemon, index) => 
                <li key={index}>
                    <a href={`/pokemon/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/pokemon/new">Add Pokemon</a>

            <br/><br/><br/>
            
            <form action="/pokemon/seed" method="POST">
                <button>SEED</button>
            </form>
            
            <br/>

            <form action="/pokemon/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>  
            </form>
            
        </div>
        </DefaultLayout>
    )
}

export default Index;

/*
NOTES
all pokemon are objects showing in terminal below 

{pokemon._id.toString()} don't string just reference {pokemon._id} 

*/