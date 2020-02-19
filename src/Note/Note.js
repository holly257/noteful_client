import React from 'react';
import EachNote from './Notes/EachNote'

function Note(props){
    return(
        <div>
            {props.notes.map(item => 
                <EachNote 
                    key={item.id} 
                    name={item.name} 
                    modified={item.modified}
                    content={item.content}
                    folderId={item.folderId}
                />
            )}
            <button>Add Note</button>
        </div>
    )
}

export default Note;