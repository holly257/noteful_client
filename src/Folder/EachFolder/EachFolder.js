import React from 'react';
import './EachFolder.css';
import { Link } from 'react-router-dom';

function EachFolder(props){
    return(
        <div className='each-folder-cont'>
            <Link className='each-folder' to={`/folder/${props.id}`} >{props.name}</Link>
        </div>
    )
}

export default EachFolder;