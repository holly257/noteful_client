import React from 'react';
import './EachFolder.css';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

class EachFolder extends React.Component{
    
    static contextType = AppContext;
    render() {
    const classes = this.props.selected === this.props.id
        ? 'folder selected' : 'folder'

        return(
            <div className='each-folder-cont'>
                <Link 
                    className={classes} 
                    to={`/folder/${this.props.id}`}
                    
                >
                    {this.props ? this.props.name : this.context.folders.name}
                </Link>
            </div>
        )
    }
    
}

export default EachFolder;