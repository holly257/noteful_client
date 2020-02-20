import React from 'react';
import './EachNote.css';

function Notes(props){
    return(
        <div className='each-note'>
            <h2 className='note-name'>{props.name}</h2>
            {/* figure out formatting */}
            <p className='date'>{props.modified}</p>
            <button className='delete-btn'>Delete Note</button>

        </div>
    )
}

export default Notes;