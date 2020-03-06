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

        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
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
            console.error({error})
            this.setState(() => { throw error; });
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
                    <select onChange={e => this.updateFolderSelect(e.target.value)}>
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
            </form>
        )
    }
}

export default AddNote;