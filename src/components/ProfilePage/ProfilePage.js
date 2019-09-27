import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';




class ProfilePage extends Component {
    state = {
        humidor_count: 0,
    }

    componentDidMount() {
        console.log(this.props.store.singleReducer)
    }
    updateCount = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    addCount = () => {
        const cigarCount ={
        humidor_count: this.state.humidor_count
    }
    this.props.dispatch({type: 'PUT_ONE_CIGAR_INFO', payload: cigarCount});
    }

        render() {
            const cigar = this.props.store.singleReducer;
            
            return (
                <div>
                    <h4>BRAND: {cigar.brand}</h4>
                    <p>COUNTRY: {cigar.country}</p>
                    <p>STRENGTH: {cigar.strength}</p>
                    <p>CIGAR NAME: {cigar.cigar_name}</p>
                    <p>SIZE TYPE: {cigar.size_type}</p>
                    <p>RING GAUGE: {cigar.ring_gauge}</p>
                    <p>FILLER: {cigar.filler}</p>
                    <p>BINDER: {cigar.binder}</p>
                    <p>WRAPPER: {cigar.wrapper}</p>

                    Amount in humidor: {this.state.humidor_count}
                <button onClick={() => { this.setState({ humidor_count: this.state.humidor_count + 1 }) }}>Increase</button>
                <button onClick={() => { this.setState({ humidor_count: this.state.humidor_count - 1 }) }}>Decrease</button>
                <button onClick={() => { this.setState({ humidor_count: 0 }) }}>Reset</button>
                <button onClick={this.addCount}>Add to Humidor</button>
                </div>
                
            );
        }
    
}

export default connect(mapStoreToProps)(withRouter(ProfilePage));