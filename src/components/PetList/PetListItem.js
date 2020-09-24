import React, { Component } from 'react';

class petListItem extends Component {
    render() {
        return (
            <div>
                <td>{this.props.pet.owner}</td>
                <td>{this.props.pet.name}</td>
                <td>{this.props.pet.breed}</td>
                <td>{this.props.pet.color}</td>
                {/* this will need to change 
                this is a boolean in the database
                so conditional rendering will be needed*/}
                <td>checked in</td>
                <td>
                    <button
                        type="button"
                        className="btn btn_asLink"
                    >
                        Delete
                    </button>
                    {/* This will need to be conditional rendering
                    to display if they need to be checked in
                    or checked out */}
                    <button
                        type="button"
                        className="btn btn_asLink"
                    >
                        Check In
                    </button>
                </td>
            </div>
        );
    }
}

export default petListItem;
