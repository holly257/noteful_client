import React from 'react';

function Notes(props){
    return(
        <div>
            <h2>{props.name}</h2>
            {/* figure out formatting */}
            <p>{props.modified}</p>
            <button>Delete Note</button>
        </div>
    )
}

export default Notes;