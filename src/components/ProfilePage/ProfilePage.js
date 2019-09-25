import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';




class ProfilePage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_ONE_CIGAR_INFO',
            payload: this.props.match.params.id
        });
    }
}

export default connect(mapStoreToProps)(withRouter(ProfilePage));