import React from 'react';
import Note from './Note';
import AppContext from '../AppContext';
import { Redirect } from 'react-router-dom';

class NotePage extends React.Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;
    render(){

        const selectedNote = this.context.notes.find(
            note => note.id === +this.props.match.params.noteId)
        
        if (selectedNote) {
            return(
                <div className='main'>
                    <Note 
                        modified={selectedNote.modified} 
                        id={selectedNote.id } 
                        name={selectedNote.name} 
                    />
                    <p>{selectedNote.content}</p>
                </div>
            );
        }
        else {
            return(
                <div id='note-deleted'>Deleted Successfully</div>
            ) 
        }
    }  
}

export default NotePage;
