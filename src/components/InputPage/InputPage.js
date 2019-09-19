import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
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
   
    enterValue = (event) => {
        this.setState({
            brand: event.target.value,
            country: event.target.value,
            strength: event.target.value,
            cigar_name: event.target.value,
            size_type: event.target.value,
            ring_gauge: event.target.value,
            filler: event.target.value,
            binder: event.target.value,
            wrapper: event.target.value
    
        })
    }
    onNextClick = (event) => {
this.props.dispatch({type: 'SET_CIGAR_INFO', payload: this.state.brand })
    }
    render() {
        return(
            <div>
                <h1>Enter New Info Here</h1>
                <input type="text" onChange={this.enterValue}/>
                <button onClick={this.onNextClick}>Submit</button>
            </div>
        )
    }
}
export default connect(mapStoreToProps)(withRouter(InputPage));
