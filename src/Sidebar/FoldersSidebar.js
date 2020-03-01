import React from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../AppContext';

class FoldersSidebar extends React.Component{
    render(){
        return(
            <div className='sidebar'>
                <h2 className='folder-header'>Folders</h2>
                <ul>
                    {this.props.folders.map((folder) => {
                        const classes = this.props.selected === folder.id
                            ? 'folder selected' : 'folder'
                        
                        return(
                            <li key={folder.id}>
                                <Link 
                                    className='classes' 
                                    to={`/folders/${folder.id}`}
                                >
                                    {folder.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <button>New Folder</button>
            </div>
        );
    }           
}

export default FoldersSidebar;