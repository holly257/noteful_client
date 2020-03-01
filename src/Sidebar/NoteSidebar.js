import React from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../../AppContext';

class EachFolder extends React.Component{
    render() {
        console.log(this.props)
        return(
            <div className='sidebar'>
                <Link to={`/`}>Go Back</Link>
                <h2 className='folder selected'>{this.props.name}</h2>
            </div>
        );
    }
}

export default EachFolder;