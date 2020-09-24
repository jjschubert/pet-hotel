import React, { Component } from 'react';
import { connect } from 'react-redux';

class ownerListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.owner.name}</td>
                <td>Pet #</td>
                <td>Delete</td>
            </tr>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ownerListItem);
