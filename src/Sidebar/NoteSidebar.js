import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

class EachFolder extends React.Component{
    render() {
        return(
            <div className='sidebar'>
                <Link to={`/`}>Go Back</Link>
                <h2>Current Folder: {this.props.name}</h2>
            </div>
        );
    }
}

export default EachFolder;