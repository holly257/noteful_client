import React from 'react';
import './Folder';
import { Link } from 'react-router-dom';

class SelectedNoteFolder extends React.Component{
    
    render() {
        return(
            <div className='each-folder-cont'>
                <p 
                    className='select note-folder'                 
                >
                    {this.props.name}
                </p>
                <Link 
                    to='/' 
                    className='select back-btn'
                >
                    Go Back
                </Link>
            </div>
        )
    }    
}

export default SelectedNoteFolder;