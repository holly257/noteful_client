import React from 'react';
import EachNote from './Notes/EachNote'
import AppContext from '../AppContext';
import './Note.css';

class Note extends React.Component{
    static contextType = AppContext;
    render(){
        return(
            <>
                <h2 className='note-header'>Notes</h2>
                <div className='note-cont'>
                    {this.context.notes.map(item => 
                        <EachNote 
                            key={item.id} 
                            name={item.name} 
                            modified={item.modified}
                            content={item.content}
                            folderId={item.folderId}
                            noteId={item.id}
                        />
                    )}
                    <button className='add-note-btn'>Add Note</button>
                </div>
            </> 
        )
    }
}

export default Note;