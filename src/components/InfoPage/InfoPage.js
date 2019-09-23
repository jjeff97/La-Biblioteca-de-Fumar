import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


class InfoPage extends Component {
  state = {
    count: 0,
  }
clickInventory = (event) => {
  this.setState({
    count: !this.state.hide,
  });
}
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CIGAR_INFO' });
  }
onNewInput =(event) =>{
  this.props.history.push('/input')
} 
 render() {
    const cigarArray = this.props.store.cigarReducer.map((cigar, index) => {
      return (
        <div key={index} >
          <table class ="table">
          <thead>
          <tr> 
          <th>{cigar.brand}</th>
          <th>{cigar.country}</th>
          <th>{cigar.strength}</th>
          <th>{cigar.cigar_name}</th>
          <th>{cigar.size_type}</th>
          <th>{cigar.ring_gauge}</th>
          <th>{cigar.filler}</th>
          <th>{cigar.binder}</th>
          <th>{cigar.wrapper}</th>
          </tr>
          </thead>
          </table>
          Amount in humidor: {this.state.count} 
          <button onClick={() => {this.setState({count: this.state.count +1})}}>Increase</button>
          <button onClick ={() => {this.setState({count: this.state.count -1})}}>Decrease</button>
          <button onClick={() => {this.setState({count: 0})}}>Reset</button>
          </div>
              )
    })

    return (
      <div>
        <h1>Cigar Library</h1>
        {cigarArray}
        <h2>Click to enter new cigars</h2>
        <button onClick={this.onNewInput}>Next</button>
      </div >
    );
  };
}



export default connect(mapStoreToProps)(withRouter(InfoPage));
