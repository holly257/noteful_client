import React from 'react';
import AppContext from './AppContext';

class AddFolder extends React.Component{
    static defaultProps = {
        onAddFolder: () => {},
    }
    static contextType = AppContext;

    state = {
        name: '',
    }

    handleFolderSubmit = event => {
        event.preventDefault()
        console.log('submitted')

        fetch(`http://localhost:8000/api/folders`, {
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
            this.context.addFolder(data)
            this.props.history.goBack()
        })
        .catch(error => {
            console.error(error)
            this.setState({ error: 'The folder did not add. Please try again later.' });
        })
    }

    updateName(name){
        this.setState({
            name: name
        })
    }

    validateFolder = () => {
        let folderName = this.state.name
        if(this.context.folders.find(folder => folder.name === folderName)){
            return ('Folder name already exists. Please choose another name.')
        } 
    }

    render(){
        return(
            <form className='add-form' onSubmit={e => this.handleFolderSubmit(e)}>
                <h2>Add New Folder</h2>
                <div>
                    <label htmlFor='name'>Folder Name: </label>
                    <input
                        required
                        aria-required='true'
                        type='text'
                        className='add-folder'
                        name='name'
                        id='name'
                        value={this.state.name}
                        onChange={e => this.updateName(e.target.value)}
                    />
                    <p>{this.validateFolder()}</p>
                </div>
                <br/>
                <button className='add-btn'>Add</button>
                <h3>{this.state.error}</h3>
            </form>
        )
    }
}

export default AddFolder;