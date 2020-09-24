import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerForm from '../OwnerForm/OwnerForm.jsx'
import OwnerItem from '../OwnerTable/OwnerItem'

class OwnerTable extends Component {

    state = {
        heading: 'Class Component',
    };

    

    render() {
        const ownerList = [ {id: 1, name: 'Ben'}, {id: 2, name: 'Amy'}]

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
                       {/* uncomment this to use reducer data */}
                       {/* {this.props.reduxState.ownerReducer.map((owner) => {
                           return(
                               <OwnerItem key={owner.id} />
                           )
                       })} */}
                       {ownerList.map((owner) => {
                           return(
                            <tr>
                            <td>{owner.name}</td>
                            <td>Pet #</td>
                            <td>Delete</td>
                        </tr>
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
