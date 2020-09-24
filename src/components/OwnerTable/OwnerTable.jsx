import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerForm from '../OwnerForm/OwnerForm.jsx'
import OwnerItem from '../OwnerTable/OwnerItem'

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
                       {this.props.reduxState.ownerReducer.map((owner) => {
                           return(
                               <OwnerItem key={owner.id} />
                           )
                       })}
                       <tr></tr>
                   </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});


export default connect(mapReduxStateToProps)(OwnerTable)
