import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {  Link } from 'react-router-dom';
import './App.css';
import OwnerTable from '../OwnerTable/OwnerTable.jsx'

class App extends Component {
  render() {
  return (
    <div className="App">
     
      <OwnerTable />
    </div>
  );
}
}

export default App;
