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
//   state = {
//     count: 0,
//   }
// clickInventory = (event) => {
//   this.setState({
//     count: !this.state.hide,
//   });
// }
//   componentDidMount() {
//     this.props.dispatch({ type: 'GET_CIGAR_INFO' });
//   }
// onNewInput =(event) =>{
//   this.props.history.push('/input')
// } 
// clickToProfile = (event) => {
//   this.props.history.push(`/profile/${this.props.item.id}`);
// }
//  render() {
//    console.log('cigars: ', this.props.store.cigars);
//     const cigarArray = this.props.store.cigarReducer.map((cigar, index) => {
//       return (
// <div>
//   <CigarList cigars={this.props.store.cigars} />
// </div>





        // <div key={index} >
        //   <table class ="table">
        //   <thead>
        //   <tr> 
        //   <th>{cigar.brand}</th>
        //   <th>{cigar.country}</th>
        //   <th>{cigar.strength}</th>
        //   <th>{cigar.cigar_name}</th>
        //   <th>{cigar.size_type}</th>
        //   <th>{cigar.ring_gauge}</th>
        //   <th>{cigar.filler}</th>
        //   <th>{cigar.binder}</th>
        //   <th>{cigar.wrapper}</th>
        //   </tr>
        //   </thead>
        //   </table>
  //         Amount in humidor: {this.state.count} 
  //         <button onClick={() => {this.setState({count: this.state.count +1})}}>Increase</button>
  //         <button onClick ={() => {this.setState({count: this.state.count -1})}}>Decrease</button>
  //         <button onClick={() => {this.setState({count: 0})}}>Reset</button>
  //         <button onClick={this.clickToProfile}>View</button>
  //         </div>
  //             )
  //   })

  //   return (
  //     <div>
  //       <h1>Cigar Library</h1>
  //       {cigarArray}
  //       <h2>Click to enter new cigars</h2>
  //       <button onClick={this.onNewInput}>Next</button>
  //     </div >
  //   );
  // };




export default connect(mapStoreToProps)(withRouter(InfoPage));
