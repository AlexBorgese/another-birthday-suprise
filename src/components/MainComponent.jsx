import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setEndDate, setStartDate } from '../actions/dateActions';
import DatePicker from './DatePicker.jsx';
import PickedTime from './PickedTime';
import SearchButtons from './SearchButtons';

function mapStateToProps(state) {
	console.log(state);
	return {
		endDate: state.endDate,
		startDate: state.startDate,
		dateReducer: state.dateReducer
	};
}
  
function mapDispatchToProps(dispatch) {
	return {
		dateActions: bindActionCreators({ setEndDate, setStartDate }, dispatch)
	};
}

class MainContent extends Component {
	render() {
		const { dateReducer } = this.props;

		console.log(this.props);
		return(
			<div className="main-content">
				<DatePicker />
				{ dateReducer.picked && <PickedTime startTime={ dateReducer.startDate } endTime={ dateReducer.endDate } /> }
				{ dateReducer.picked && <SearchButtons startTime={ dateReducer.startDate } endTime={ dateReducer.endDate } /> }
			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(MainContent);
