import React, { Component } from 'react';
import { connect } from 'react-redux';

class ownerListItem extends Component {
    render() {
        return (
            <tr></tr>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ownerListItem);
