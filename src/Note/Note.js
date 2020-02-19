import React from 'react';
import EachNote from './Notes/EachNote'

function Note(){
    return(
        <div>
            {/* map thorugh and make notes for each props */}
            <EachNote />
            <button>Add Note</button>
        </div>
    )
}

export default Note;