import React from 'react';
import Header from './Header';
import Note from './Note/Note';
import Folder from './Folder/Folder'
import { Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Note />
      </main>
      <Folder />
    </div>
  );
}

export default App;
