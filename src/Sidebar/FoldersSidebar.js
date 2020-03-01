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
        const classes = this.props.selected.id === this.props.id
        ? 'folder selected' : 'folder'
      
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
                    <div className='each-folder-cont'>
                        <Link 
                            className={classes} 
                            to={`/folder/${this.props.id}`}
                            
                        >
                            {this.props ? this.props.name : this.context.folders.name}
                        </Link>
                </div>    
                    <button className='add-btn'>Add Folder</button>
                </div>
            </>
        )
    }           
}

export default Folder;