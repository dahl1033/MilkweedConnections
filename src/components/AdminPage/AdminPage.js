import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminTabBar from '../AdminTabBar/AdminTabBar';
import { CSVLink, CSVDownload } from "react-csv";


// this component exists to display the Admin tab bar which holds the data tables
class AdminPage extends Component {
 

  render() {
    return (
      <div>
        <AdminTabBar/>
        <CSVLink data={this.props.store.print}> Print </CSVLink>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
