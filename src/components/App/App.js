import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import {  Link } from 'react-router-dom';
import AddPetForm from '../AddPetForm/AddPetForm.js'
import OwnerTable from '../OwnerTable/OwnerTable.jsx'
import PetList from '../PetList/PetList.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Link to='/'>Pets</Link>
        <br/>
        <Link to='/owners'>Owners</Link>

        {/* <AddPetForm />
        <PetList /> */}
      <Route exact path='/' component={AddPetForm} />
       <Route exact path ='/owners' component={OwnerTable}/>
      </div>
      </Router>
    );
  }

}

export default App;
