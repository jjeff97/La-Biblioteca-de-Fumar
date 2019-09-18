React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
    onNextCLick = (event) => {
        
    }
}
