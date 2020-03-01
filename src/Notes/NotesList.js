import React from 'react';
import Note from './Note';
// import AppContext from '../AppContext';

class NoteListMain extends React.Component{
    render(){
        return(
            <div className='main'>
                <h2 className='note-header'>Notes</h2>
                <ul>
                    {this.props.notes.map((note) => {
                        return(
                            <Note modified={note.modified} key={note.id} id={note.id} name={note.name}/>
                        )
                    })}
                </ul>
                <button className='add-note-btn'>Add Note</button>
            </div> 
        );
    }
}

export default NoteListMain;