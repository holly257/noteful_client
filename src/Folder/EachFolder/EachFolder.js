import React from 'react';
import './EachFolder.css';

function EachFolder(props){
    return(
        <div className='each-folder-cont'>
            <h6 className='each-folder'>{props.name}</h6>
        </div>
    )
}

export default EachFolder;