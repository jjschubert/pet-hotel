import React, { Component } from 'react';
import './App.css';
import AddPetForm from '../AddPetForm/AddPetForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPetForm />
      </div>
    );
  }
}

export default App;
