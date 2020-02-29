import React from 'react';
import Header from './Header';
import Note from './Note/Note';
import Folder from './Folder/Folder'
import EachNote from './Note/Notes/EachNote';
import SelectedNoteFolder from './Folder/selectedNoteFolder';
import { Route } from 'react-router-dom';
import AppContext from './AppContext';
import './App.css';
import EachFolder from './Folder/EachFolder/EachFolder';

class App extends React.Component {
  state= {
    folders: this.props.store.folders,
    notes: this.props.store.notes
  }

  render(){
    const contextValue = {
      folders: this.props.store.folders,
      notes: this.props.store.notes
    }
    return (
      <AppContext.Provider
          value={contextValue} 
        >
        <div className="App">
          <Header />

          {/* main route - everything shows */}
          <Route exact path='/'>
            <Folder />
            <Note />
          </Route>

          {/* dynamic folder route  */}
          <Route exact path='/folder/:id' component={Folder}/>
           
          <Route 
            exact
            path='/folder/:id'
            render={(routeProps) => {
              return(
                <Note 
                  folderId={routeProps.match.params.id}
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
                // <EachFolder />
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
                
                  noteId={selectedNote.id}
                
                />
              )
            }}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;