import React from 'react';
import Header from './Header';
import Note from './Note/Note';
import Folder from './Folder/Folder'
import { Router } from 'react-router-dom';
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
        <Folder folders={this.state.folders}/>
        <Note notes={this.state.notes}/>
        
      </div>
    );
  }
}

export default App;
