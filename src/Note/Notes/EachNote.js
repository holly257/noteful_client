import React from 'react';
import './EachNote.css';

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
                <h2 className='note-name'>{this.props.name}</h2>
                {/* figure out formatting */}
                <p className='date'>Modified on {modified}</p>
                <button className='delete-btn'>Delete Note</button>

            </div>
        )
    }
    
}

export default Notes;