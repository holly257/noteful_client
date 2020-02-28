import React from 'react';
import EachFolder from './EachFolder/EachFolder';
import './Folder.css';

class Folder extends React.Component{
    render(){
        
        return(
            <>
                <h2 className='folder-header'>Folders</h2>
                <div className='folder-container'>
                    {
                    this.props.folders.map(item =>
                        <EachFolder key={item.id} name={item.name} id={item.id}/>
                    )}
                        
                    <button className='add-btn'>Add Folder</button>
                </div>
            </>
        )
    }           
}

export default Folder;