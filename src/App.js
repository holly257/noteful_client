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
        {/* don't need header route */}
        <Route path='/' component={Header} />

        {/* side bar changing  */}
        <Route path='/folder/:id'>
          <Folder folders={this.state.folders} />
        </Route>
        
        <Note notes={this.state.notes}/>
        
      </div>
    );
  }
}

export default App;
