import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';




class ProfilePage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_CIGAR_INFO',
            payload: this.props.match.params.id
        });
    }
        render() {
            
            return (
                <di>
                    <p>profile</p>
                </di>
                
            );
        }
    
}

export default connect(mapStoreToProps)(withRouter(ProfilePage));