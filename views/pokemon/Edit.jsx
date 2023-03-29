import React from "react";

function Edit(props){ // props passed is pokemon 
    return(
        <div>
            <h1>Edit Pokemon</h1>
            <form action = {`/pokemon/${props.pokemon._id}?_method=PUT`} method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" defaultValue={props.pokemon.name}/><br /><br />

                <label htmlFor="img">Image:</label><br />
                <input type="text" id="img" name="img" defaultValue={props.pokemon.img}/><br /><br />
            
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default Edit;

