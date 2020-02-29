import React from 'react';
import './EachNote.css';
import { Link } from 'react-router-dom'

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

    render(){
        const modified = formatDate(new Date(this.props.modified));
        return(
            <div className='each-note'>
                <Link 
                    className='note-name'
                    to={`/card/${this.props.noteId}`}
                >
                    {this.props.name}
                </Link>
                {/* figure out formatting */}
                <p className='date'>Modified on {modified}</p>
                <button className='delete-btn'>Delete Note</button>
                <p className='note-desc'>{this.props.description ? this.props.description : ''}</p>
            </div>
        )
    }
    
}

export default Notes;
