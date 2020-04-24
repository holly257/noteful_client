import React from 'react';
import AppContext from './AppContext';

class AddNote extends React.Component{
    static defaultProps = {
        onAddNote: () => {},
    }
    static contextType = AppContext;

    state = {
        name: '',
        content: '',
        folderId: ''
    }

    handleNoteSubmit = event => {
        event.preventDefault()
        console.log('submitted')

        const newNote = this.state
        newNote.modified = new Date().toISOString()

        fetch(`http://localhost:8000/api/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then((data) => {
            this.context.addNote(data)
            this.props.history.push('/')

        })
        .catch(error => {
            console.error(error)
            this.setState({ error: 'The note did not add. Please try again later.' });
        })
    }

    updateNoteName(name){
        this.setState({
            name: name
        })
    }

    updateNoteContent(name){
        this.setState({
            content: name
        })
    }

    updateFolderSelect(id){
        this.setState({
            folderId: id
        })
    }

    validateFolderSelected = () => {
        let folderId = this.state.folderId
        if(folderId === ''){
            return 'Please select a folder.'
        }
    }

    render(){
        return(
            <form className='add-form' onSubmit={e => this.handleNoteSubmit(e)}>
                <h2>Add New Note</h2>
                <div>
                    <label htmlFor='name'>Note Name: </label>
                    <input
                        required
                        aria-required='true'
                        type='text'
                        className='add-folder'
                        name='name'
                        id='name'
                        value={this.state.name}
                        onChange={e => this.updateNoteName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='content'>Note Content: </label>
                    <input
                        required
                        aria-required='true'
                        type='text'
                        className='content'
                        name='content'
                        id='content'
                        value={this.state.content}
                        onChange={e => this.updateNoteContent(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='folder-name'>Select Folder: </label>
                    <select required onChange={e => this.updateFolderSelect(e.target.value)} aria-describedby='select-folder-err'>
                        <option value=''>Please Select</option>
                        {this.context.folders.map(folder =>{
                            return <option 
                                    value={folder.id} 
                                    key={folder.name}
                                    >
                                        {folder.name}
                                    </option>
                        })
                        }
                        
                    </select>
                    <p id='select-folder-err'>{this.validateFolderSelected()}</p>
                </div>
                <br/>
                <button className='add-btn'>Add</button>
                <h3>{this.state.error}</h3>
            </form>
        )
    }
}

export default AddNote;