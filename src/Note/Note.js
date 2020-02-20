import React from 'react';
import EachNote from './Notes/EachNote'
import './Note.css';

function Note(props){
    return(
        <div className='note-cont'>
            {props.notes.map(item => 
                <EachNote 
                    key={item.id} 
                    name={item.name} 
                    modified={item.modified}
                    content={item.content}
                    folderId={item.folderId}
                />
            )}
            <button className='add-note-btn'>Add Note</button>
        </div>
    )
}

export default Note;