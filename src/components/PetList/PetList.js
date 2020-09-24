import React, { Component } from 'react';
import { connect } from 'react-redux'
import PetListItem from './PetListItem.js'

class PetList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked in</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.petsReducer.map((pet) => {
                            return (
                                <tr key={pet.id}>
                                    <PetListItem pet={pet} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PetList);
