import React from 'react';
import './EachNote.css';
import { Link } from 'react-router-dom'
import AppContext from '../../AppContext';

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

class Notes extends React.Component{
    static contextType = AppContext;
   
    render(){
        const note = this.context.notes.find(note => note.id === this.props.noteId)
        const modified = formatDate(new Date(note.modified));
        console.log(note)
        return(
            <div className='each-note'>
                <Link 
                    className='note-name'
                    to={`/card/${note.id}`}
                >
                    {note.name}
                </Link>
                {/* figure out formatting */}
                <p className='date'>Modified on {modified}</p>
                <button className='delete-btn'>Delete Note</button>
                <p className='note-desc'>{note.content ? note.content : ''}</p>
            </div>
        )
    }
    
}

export default Notes;
