import React from 'react';
import EachFolder from './EachFolder/EachFolder';
import AppContext from '../AppContext';
import './Folder.css';
import App from '../App';

class Folder extends React.Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = AppContext;
    render(){      
        return(
            <>
                <h2 className='folder-header'>Folders</h2>
                <div className='folder-container'>
                    {
                    this.context.folders.map(item =>
                        <EachFolder 
                        key={item.id} 
                        name={item.name} 
                        id={item.id} 
                        selected={this.props.match.params}/>
                    )}
                        
                    <button className='add-btn'>Add Folder</button>
                </div>
            </>
        )
    }           
}

export default Folder;