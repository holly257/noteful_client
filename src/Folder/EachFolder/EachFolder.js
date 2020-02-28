import React from 'react';
import './EachFolder.css';
import { Link } from 'react-router-dom';

class EachFolder extends React.Component{
    

    render() {
    const classes = this.props.selected === this.props.id
        ? 'folder selected' : 'folder'

        return(
            <div className='each-folder-cont'>
                <Link 
                    className={classes} 
                    to={`/folder/${this.props.id}`}
                    
                >
                    {this.props.name}
                </Link>
            </div>
        )
    }
    
}

export default EachFolder;