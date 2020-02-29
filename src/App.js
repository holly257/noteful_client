import React from 'react';
import Header from './Header';
import Note from './Note/Note';
import Folder from './Folder/Folder'
import EachNote from './Note/Notes/EachNote';
import SelectedNoteFolder from './Folder/selectedNoteFolder';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state= {
    folders: this.props.store.folders,
    notes: this.props.store.notes
  }

  render(){
    return (
      <div className="App">
        <Header />

        {/* main route - everything shows */}
        <Route exact path='/'>
          <Folder folders={this.state.folders} />
          <Note notes={this.state.notes}/>
        </Route>

        {/* dynamic folder route  */}
        <Route exact path='/folder/:id' 
          render={(routeProps) => {
            return (
              <Folder 
              folders={this.state.folders} 
              selected={routeProps.match.params.id}
              />
            )
          }}
        >
          
        </Route>
        <Route 
          exact
          path='/folder/:id'
          render={(routeProps) => {
            return(
              <Note 
                notes={this.state.notes.filter(note => 
                note.folderId === routeProps.match.params.id
                )}
              />
            )
          }}
        />
                
        {/* dynamic note route */}
        <Route 
          exact 
          path='/card/:noteId'
          render={(routeProps) => {
            const selectedFolderId = this.state.notes.find(
              note => note.id === routeProps.match.params.noteId
            ).folderId

            const selectedFolder = this.state.folders.find(
              folder => folder.id === selectedFolderId
            )
            console.log(selectedFolder)
            return(
              <SelectedNoteFolder {...selectedFolder} />
            )
          }}
        />
      
        <Route 
          exact
          path='/card/:noteId'
          render={(routeProps) => {
            const selectedNote = this.state.notes.find(note =>
                  note.id === routeProps.match.params.noteId)
            return(
              <EachNote 
              name={selectedNote.name} 
              modified={selectedNote.modified}
              content={selectedNote.content}
              folderId={selectedNote.folderId}
              noteId={selectedNote.id}
              description={selectedNote.content}
              />
            )
          }}
        />
          

      </div>
    );
  }
}

export default App;

// folder route to fix:
//    sidebar should display selected folder highlighted

// note route to fix:
//    main section should display currently selected note name, modified date, and content
//    sidebar should show folder of note currently selected and back button