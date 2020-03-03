import React from 'react';
import FoldersSidebar from './Sidebar/FoldersSidebar';
import NoteSidebar from './Sidebar/NoteSidebar';
import NotesList from './Notes/NotesList';
import NotePage from './Notes/NotePage';
import { Route, Link} from 'react-router-dom';
import './App.css';
import AppContext from './AppContext';
import AddFolder from './AddFolder';
import AddNote from './AddNote';

class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/notes'),
      fetch('http://localhost:9090/folders')
    ])
      .then(([notesRes, foldersRes]) => {
        if(!notesRes.ok)
          throw new Error('Note fetch failed')
        if (!foldersRes.ok)
          throw new Error('Folders fetch failed')
        return Promise.all([notesRes.json(), foldersRes.json()])
      })
      .then(([notes, folders]) => {
        this.setState({notes, folders});
      })
      .catch(error => {
        console.error({error});
      })
  }

  // keeps client up to date with delete on server
  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(
        note => note.id !== noteId)
    });
  };

  handleAddFolder = newFolder => {
    this.setState({
      folders: [...this.state.folders, newFolder]
    });
  };

  handleAddNotes = newNote => {
    this.setState({
      notes: [...this.state.notes, newNote]
    });
  };

  render(){
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNotes
    };

    return (
      <AppContext.Provider value={value}>
        <div className='app'>
          <header className='app-header'>
            <h1><Link to={'/'}>Noteful</Link></h1>
          </header>

          {/* Nav Routes */}
          <div className='sidebar-nav'>
            <Route
              exact
              path='/'
              component={FoldersSidebar}/>
            <Route 
              exact
              path='/folders/:folderId'
              component={FoldersSidebar}/>
            <Route 
              exact 
              path='/notes/:noteId'
              component={NoteSidebar}/>
            <Route path='/add-folder' component={AddFolder} />
            <Route path='/add-note' component={AddNote} />
          </div>

          {/* Main/Note Routes */}
          <main>
            <Route 
              exact
              path='/'
              component={NotesList}/>
            <Route 
              exact
              path='/folders/:folderId'
              component={NotesList}/>
            <Route 
              exact
              path='/notes/:noteId'
              component={NotePage}/>
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;