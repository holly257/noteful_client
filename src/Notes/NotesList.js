import React from 'react';
import Note from './Note';
import AppContext from '../AppContext';

class NoteListMain extends React.Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = AppContext;

    render(){
        const filteredNotes = !this.props.match.params.folderId 
            ? this.context.notes : this.context.notes.filter(
            note => note.folderId === this.props.match.params.folderId)
        return(
            <div className='main'>
                <h2 className='note-header'>Notes</h2>
                <ul>
                    {filteredNotes.map((note) => {
                        return(
                            <Note modified={note.modified} key={note.id} id={note.id} name={note.name}/>
                        )
                    })}
                </ul>
                <Link className='add-note-btn' to='/add-note'>Add Note</Link>
            </div> 
        );
    }
}

export default NoteListMain;