import React from 'react';
import EachFolder from './EachFolder/EachFolder';
import './Folder.css';

function Folder(props){
    console.log(props)
    return(
        <div className='folder-container'>
            {props.folders.map(item =>
                <EachFolder key={item.id} name={item.name} id={item.id}/>
            )}
            <button className='add-btn'>Add Folder</button>
            <button className='back-btn'>Go Back</button>
            <h4 className='current-folder'>...</h4>
        </div>
    )
}

export default Folder;