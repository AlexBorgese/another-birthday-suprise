import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setEndDate, setStartDate } from '../actions/dateActions';
import DatePicker from './DatePicker.jsx';

function mapStateToProps(state) {
	console.log(state);
	return {
		endDate: state.endDate,
		startDate: state.startDate
	};
}
  
function mapDispatchToProps(dispatch) {
	return {
		dateActions: bindActionCreators({ setEndDate, setStartDate }, dispatch)
	};
}

class MainContent extends Component {
	render() {
		console.log(this.state);
		return(
			<div className="main-content">
				<DatePicker />
				{ this.props.startDate }
				{ this.props.endDate }
			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(MainContent);
