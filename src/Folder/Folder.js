import React from 'react';
import EachFolder from './EachFolder/EachFolder';
import './Folder.css';

function Folder(props){
    return(
        <div className='folder-container'>
            {props.folders.map(item =>
                <EachFolder key={item.id} name={item.name}/>
            )}
            <button className='add-btn'>Add Folder</button>
            <button className='back-btn'>Go Back</button>
        </div>
    )
}

export default Folder;