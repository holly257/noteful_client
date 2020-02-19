import React from 'react';
import EachFolder from './EachFolder/EachFolder';

function Folder(){
    return(
        <div>
            {/* map through and make folder for each */}
            <EachFolder />
            <button>Add Folder</button>
        </div>
    )
}

export default Folder;