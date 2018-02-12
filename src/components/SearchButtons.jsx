import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { trivagoUrl, ryanAirUrl, expediaUrl, planesUrl } from '../utils/travelSiteHelpers';
import { setEndDate, setStartDate } from '../actions/dateActions';

function mapStateToProps(state) {
	console.log(state);
	return {
		dateReducer: state.dateReducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dateActions: bindActionCreators({ setEndDate, setStartDate }, dispatch)
	};
}

const trivago = (startDate, endDate) => {
    window.open(trivagoUrl(startDate, endDate));
};

const ryanair = (startDate, endDate) => {
    window.open(ryanAirUrl(startDate, endDate));
};

const expedia = (startDate, endDate) => {
    window.open(expediaUrl(startDate, endDate));
};

const planes = (startDate, endDate) => {
    window.open(planesUrl(startDate, endDate));
};

class SearchButton extends Component {
    render() {
        // deconstruct here next time
        return (
            <div className="search-buttons">
                <button><a onClick={ () => trivago(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">TRIVAGO</a></button>
                <button><a onClick={ () => ryanair(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">RYANAIR</a></button>
                <button><a onClick={ () => expedia(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">EXPEDIA</a></button>
                <button><a onClick={ () => planes(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">PLANES?</a></button>
            </div>
        );
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(SearchButton);
