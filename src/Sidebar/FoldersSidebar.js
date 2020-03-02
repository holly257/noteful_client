import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

class FoldersSidebar extends React.Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = AppContext;

    render(){

        return(
            <div className='sidebar'>
                <h2 className='folder-header'>Folders</h2>
                <ul>
                    {this.context.folders.map((folder) => {
                        const classes = this.props.match.params.folderId === folder.id
                            ? 'folder selected' : 'folder'
                        
                        return(
                            <li key={folder.id}>
                                <Link 
                                    className={classes} 
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