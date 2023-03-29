import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
    return(
        <DefaultLayout title="Show View">
        <h1>Gotta Catch 'Em All'</h1>
        <h2>{props.pokemon.name}</h2>
        <img src={`${props.pokemon.img}.jpg`} alt='pokemon img'></img>
        <br />

         <a href={`/pokemon/${props.pokemon._id}/edit`}>Edit</a>
            <br /><br />


        <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} method="POST">
            <button>Delete</button>
            <br />

        </form> 


        <a href='/pokemon/'>Back</a>
        {/* <ul>
            {props.pokemon.map((pokemon, x) => 
            <li>
                <a href={`/pokemon/${x}`}>{pokemon.name}</a>
                </li>
            )}
        </ul> */}
    </DefaultLayout>
    )
}
export default Show;