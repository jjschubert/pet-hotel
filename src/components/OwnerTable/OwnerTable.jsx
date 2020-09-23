import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';
import OwnerForm from '../OwnerForm/OwnerForm.jsx'

class OwnerTable extends Component {
    state = {
        heading: 'Class Component',
    };

    render() {
        return (
            <div>
                <h2>Manage Owners</h2>
                <OwnerForm />

                <table >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Pets</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                   <tbody>
                       <tr></tr>
                   </tbody>
                </table>
            </div>
        );
    }
}

export default OwnerTable
