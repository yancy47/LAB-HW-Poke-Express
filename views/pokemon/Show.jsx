import React from "react";
import pokemon from "../../models/pokemon";

function Show(props) {
    return(
        <div>
        <h1>Gotta Catch 'Em All'</h1>
        <h2>{props.pokemon.name}</h2>
        <img src={`${props.pokemon.img}.jpg`} alt={props.pokemon.name}></img>
        <br />
        <a href='/pokemon/'>Back</a>
        {/* <ul>
            {props.pokemon.map((pokemon, x) => 
            <li>
                <a href={`/pokemon/${x}`}>{pokemon.name}</a>
                </li>
            )}
        </ul> */}
    </div>
    )
}
export default Show;