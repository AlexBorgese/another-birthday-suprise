import React from 'react';

import createClass from 'create-react-class';
import DateRangePicker from 'react-daterange-picker';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setEndDate, setStartDate, setRange } from '../actions/dateActions';
import '../App.css';

const moment = extendMoment(Moment);

const stateDefinitions = {
	available: {
		color: null,
		label: 'Available',
	},
	enquire: {
		color: '#ffd200',
		label: 'Enquire',
	},
	unavailable: {
		selectable: false,
		color: '#78818b',
		label: 'Unavailable',
	},
};

const dateRanges = [
	{
		state: 'enquire',
		range: moment.range(
			moment().add(2, 'weeks').subtract(5, 'days'),
			moment().add(2, 'weeks').add(6, 'days')
		),
	},
	{
		state: 'unavailable',
		range: moment.range(
			moment().add(3, 'weeks'),
			moment().add(3, 'weeks').add(5, 'days')
		),
	},
];

function mapStateToProps(state) {
	return {
		endDate: state.endDate,
		startDate: state.startDate,
		range: state.range
	};
}
  
function mapDispatchToProps(dispatch) {
	return {
		dateActions: bindActionCreators({ setEndDate, setStartDate, setRange }, dispatch)
	};
}

const DatePicker = createClass({
	getInitialState() {
		return {
			value: null,
		};
	},

	handleSelect(range, states) {
		const { dateActions } = this.props;

		// dateActions.setStartDate(range.start._d);
		// dateActions.setEndDate(range.end._d);
		dateActions.setRange(range);
	},

	render() {
		return (
			<DateRangePicker
				firstOfWeek={1}
				numberOfCalendars={2}
				selectionType='range'
				minimumDate={new Date()}
				stateDefinitions={stateDefinitions}
				dateStates={dateRanges}
				defaultState="available"
				showLegend={true}
				value={this.props.range}
				onSelect={this.handleSelect} />
		);
	},
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(DatePicker);
