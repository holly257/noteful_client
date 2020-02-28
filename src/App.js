import React from 'react';
import Header from './Header';
import Note from './Note/Note';
import Folder from './Folder/Folder'
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
        <Route exact path='/folder/:id' >
          <Folder folders={this.state.folders} />
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
        <Route path='/card/noteId'>
          <Note notes={this.state.notes}/>
        </Route>

      </div>
    );
  }
}

export default App;


// every route must have same header plus main section and sidebar section

// main section to fix:
//    modified date formatting
//    

// folder route to fix:
//    display only notes in that folder when clicked
//    sidebar should display full folder list with selected folder highlighted