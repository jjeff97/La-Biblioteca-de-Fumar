import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps'
import { withRouter } from 'react-router-dom';
class InputPage extends Component {
    state = {
        brand: '',
        country: '',
        strength: '',
        cigar_name: '',
        size_type: '',
        ring_gauge: '',
        filler: '',
        binder: '',
        wrapper: '',

    };

    // componentDidMount() {
    //     this.setState({
    //         brand: this.props.store.cigar.brand,
    //         country: this.props.store.cigar.country,
    //         strength: this.props.store.cigar.strength,
    //         cigar_name: this.props.store.cigar.cigar_name,
    //         size_type: this.props.store.cigar.size_type,
    //         ring_gauge: this.props.store.cigar.ring_gauge,
    //         filler: this.props.store.cigar.filler,
    //         binder: this.props.store.cigar.binder,
    //         wrapper: this.props.store.cigar.wrapper,

    //     })
    // }
addCigarInfo = (event, newCigarKey) => {
    this.setState({
        ...this.state,
        [newCigarKey]: event.target.value,
    })
}
  saveToLibrary = (event) => {
      this.props.dispatch({
          type: 'PUT_CIGAR',
          payload: {
              ...this.state,
              id:this.props.store.cigar

          }
      })
  }
  render() {
    
    return (
        <div>
            <h1>New Cigar</h1>
            <input
                onChange={(event) => this.saveToLibrary(event, 'brand')}
                value={this.state.brand}
                placeholder="brand"
            />
            {/* <textarea
                onChange={(event) => this.changeMovieInfo(event, 'description')}
                value={this.state.description}
                placeholder="Description"
            >
            </textarea>
            <button onClick={this.clickCancel}>Cancel</button> */}
            <button onClick={this.saveToLibrary}>Submit</button>
        </div>
    );
}
}

export default connect(mapStoreToProps)(withRouter(InputPage));