import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

class EachFolder extends React.Component{
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }
    static contextType = AppContext;

    render() {
        console.log(this.props)
        const selectedFolderId = this.context.notes.find(
            note => note.id === this.props.match.params.noteId).folderId
            const selectedFolder = this.context.folders.find(
            folder => folder.id === selectedFolderId
            )
        return(
            <div className='sidebar'>
                <button onClick={() => this.props.history.goBack()}>Go Back</button>
                <h2 className='folder selected'>{selectedFolder.name}</h2>
            </div>
        );
    }
}

export default EachFolder;