import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

class OwnerForm extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div>
        <h2>Add Owner</h2>
        <input type='text' placeholder='Owner Name' />
        <button>Submit</button>
      </div>
    );
  }
}

export default OwnerForm