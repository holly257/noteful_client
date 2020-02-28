import React from 'react';
import './EachFolder.css';
import { Link } from 'react-router-dom';

class EachFolder extends React.Component{

    render() {
        return(
            <div className='each-folder-cont'>
                <Link 
                    className='each-folder' 
                    to={`/folder/${this.props.id}`}
                    
                >
                    {this.props.name}
                </Link>
            </div>
        )
    }
    
}

export default EachFolder;