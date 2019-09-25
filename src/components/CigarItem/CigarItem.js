import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class CigarItem extends Component {



    state = {
        count: 0,
    }
    clickInventory = (event) => {
        this.setState({
            count: !this.state.hide,
        });
    }
    clickToProfile = (event) => {
        this.props.history.push(`/profile/?${this.props.item.id}`)
    }
    onNewInput = (event) => {
        this.props.history.push('/input')
    }


    render() {
        return (
            <div>
                <button onClick={this.clickToProfile}>View</button>

                <h4>{this.props.item.brand}</h4>
                <p>{this.props.item.country}</p>
                <p>{this.props.item.strength}</p>
                <p>{this.props.item.cigar_name}</p>
                <p>{this.props.item.size_type}</p>
                <p>{this.props.item.ring_gauge}</p>
                <p>{this.props.item.filler}</p>
                <p>{this.props.item.binder}</p>
                <p>{this.props.item.wrapper}</p>

                Amount in humidor: {this.state.count}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increase</button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Decrease</button>
                <button onClick={() => { this.setState({ count: 0 }) }}>Reset</button>
                <button onClick={this.clickToProfile}>View</button>

                
                
                <h2>Click to enter new cigars</h2>
                <button onClick={this.onNewInput}>Next</button>
            </div>
        )
    }
}













export default connect(mapStoreToProps) (withRouter(CigarItem));
