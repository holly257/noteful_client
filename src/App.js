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
    console.log(this.props.store.notes)
    return (
      <div className="App">
        <Header />
        <Note notes={this.state.notes}/>
        <Folder />
      </div>
    );
  }
}

export default App;
