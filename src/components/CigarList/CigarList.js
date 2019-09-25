import React, { Component } from 'react';
import CigarItem from '../CigarItem/CigarItem';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';


class CigarList extends Component {
    render() {
        const cigarArray = this.props.store.cigarReducer.map((cigar, index) => {
            return <CigarItem item={cigar} key={index} />
        })
        return (
            <div>
                {cigarArray}
            </div>
        );
    }
}


export default connect(mapStoreToProps)(CigarList);