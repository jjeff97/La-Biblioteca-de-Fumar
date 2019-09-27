import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import CigarList from '../CigarList/CigarList'


class InfoPage extends Component {


    componentDidMount() {
     this.props.dispatch({ type: 'GET_CIGAR_INFO' });
      }

      onNewInput = (event) => {
        this.props.history.push('/input')
    }
render() {
    console.log('movies: ', this.props.store.cigars);
    return (
        <div>
            <h2>Cigar Library</h2>
            <CigarList cigars={this.props.store.cigars} />
            <h2>Click to enter new cigars</h2>
        <button onClick={this.onNewInput}>Next</button>
        </div>
        
    );
}
}



export default connect(mapStoreToProps)(withRouter(InfoPage));
