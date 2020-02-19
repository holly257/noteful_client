import React from 'react';
import EachFolder from './EachFolder/EachFolder';

function Folder(props){
    return(
        <div>
            {props.folders.map(item =>
                <EachFolder key={item.id} name={item.name}/>
            )}
            <button>Add Folder</button>
        </div>
    )
}

export default Folder;