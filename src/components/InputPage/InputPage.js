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

    
    addCigarInfo = () => {
       const newCigar = {
           brand: this.state.brand,
           country: this.state.country,
           strength: this.state.strength,
           cigar_name: this.state.cigar_name,
           size_type: this.state.size_type,
           ring_gauge: this.state.ring_gauge,
           filler: this.state.filler,
           binder: this.state.binder,
           wrapper: this.state.wrapper,
           humidor_count: this.state.humidor_count
       }
        this.props.dispatch({type: 'PUT_CIGAR_INFO', payload: newCigar});
        this.props.history.push('/info')
    }


    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }
        
        
    
    render() {

        return (
            <div>
                <h1>New Cigar Form</h1>
                <h3>Enter Information</h3>
                <form onSubmit={this.submitForm}>
                    <input onChange={this.updateForm('brand')} type="text" placeholder="brand" />
                    <input onChange={this.updateForm('country')} type="text" placeholder="country" />
                    <input onChange={this.updateForm('strength')} type="text" placeholder="strength" />
                    <input onChange={this.updateForm('cigar_name')} type="text" placeholder="cigar name" />
                    <input onChange={this.updateForm('size_type')} type="text" placeholder="size type" />
                    <input onChange={this.updateForm('ring_gauge')} type="text" placeholder="ring gauge" />
                    <input onChange={this.updateForm('filler')} type="text" placeholder="filler" />
                    <input onChange={this.updateForm('binder')} type="text" placeholder="binder" />
                    <input onChange={this.updateForm('wrapper')} type="text" placeholder="wrapper" />
                </form>
               
                <button onClick={this.addCigarInfo}>Submit</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(InputPage));