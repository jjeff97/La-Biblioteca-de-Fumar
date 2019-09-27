import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class CigarItem extends Component {



    
    clickInventory = (event) => {
        this.setState({
            count: !this.state.hide,
        });
    }
    clickToProfile = (event) => {
        this.props.dispatch({type:'SET_ONE_CIGAR_INFO', payload: this.props.item});
        this.props.history.push(`/profile/?${this.props.item.id}`)
    }
    


    render() {
        return (
            <div>
                <h4>BRAND: {this.props.item.brand}</h4>
                <p> COUNTRY: {this.props.item.country}</p>
                <p> STRENGTH: {this.props.item.strength}</p>
                <p> CIGAR NAME: {this.props.item.cigar_name}</p>
                <p> SIZE/TYPE: {this.props.item.size_type}</p>
                <p> RING GAUGE: {this.props.item.ring_gauge}</p>
                <p> FILLER: {this.props.item.filler}</p>
                <p> BINDER: {this.props.item.binder}</p>
                <p> WRAPPER: {this.props.item.wrapper}</p> 
                <p> COUNT: {this.props.item.humidor_count}</p> 

                <button onClick={this.clickToProfile}>View</button>             
 </div>
 

        )
    }
}













export default connect(mapStoreToProps) (withRouter(CigarItem));
