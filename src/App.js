import React from 'react';
import store from './store';
import FoldersSidebar from './Sidebar/FoldersSidebar';
import NoteSidebar from './Sidebar/NoteSidebar';
import NotesList from './Notes/NotesList';
import NotePage from './Notes/NotePage';
import { Route, Link} from 'react-router-dom';
import './App.css';
// import AppContext from './AppContext';

class App extends React.Component {
  state = store

  render(){
    return (
      <div className='app'>
        <header className='app-header'>
          <h1><Link to={'/'}>Noteful</Link></h1>
        </header>

        <div className='sidebar-nav'>
          {/* Main route */}
          <Route
            exact
            path='/'
            render={() =>
              <FoldersSidebar folders={this.state.folders} />
            }
          />

          {/* Folder route */}
          <Route 
            exact
            path='/folders/:folderId'
            render={(props) =>
              <FoldersSidebar folders={this.state.folders} selected={props.match.params.folderId} />
            }
          />

          {/* Note Route */}
          <Route 
            exact 
            path='/notes/:noteId'
            render={(props) => {
              const selectedFolderId = this.state.notes.find(
                note => note.id === props.match.params.noteId
              ).folderId
              const selectedFolder = this.state.folders.find(
                folder => folder.id === selectedFolderId
              )
              return (
                <NoteSidebar {...selectedFolder}/>
              )
            }}
          />
        </div>

        <main>
          {/* Main Route */}
          <Route 
            exact
            path='/'
            render={() =>
              <NotesList notes={this.state.notes} />
            }
          />

          {/* Folder Route */}
          <Route 
            exact
            path='/folders/:folderId'
            render={(props) => {
              return (
                <NotesList 
                  notes={this.state.notes.filter(
                    note => note.folderId === props.match.params.folderId
                  )}
                />
              )
            }}
          />

          {/* Note Route */}
          <Route 
            exact
            path='/notes/:noteId'
            render={(props) => {
              const seletedNote = this.state.notes.find(
                note => note.id === props.match.params.noteId
              )

              return (
                <NotePage {...seletedNote}/>
              )
            }}
          />

        </main>
      </div>
    );
  }
}

export default App;