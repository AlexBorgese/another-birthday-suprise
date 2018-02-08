import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { trivagoUrl, ryanAirUrl, expediaUrl } from '../utils/travelSiteHelpers';
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

class SearchButton extends Component {
    render() {
        // deconstruct here next time
        return (
            <div className="search-buttons">
                <button><a onClick={ () => trivago(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">TRIVAGO</a></button>
                <button><a onClick={ () => ryanair(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">RYANAIR</a></button>
                <button><a onClick={ () => expedia(this.props.dateReducer.startDate, this.props.dateReducer.endDate) } target="_blank">EXPEDIA</a></button>
            </div>
        );
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(SearchButton);

  /*
  https://www.trivago.co.uk/?aDateRange%5Barr%5D=2018-03-19&aDateRange%5Bdep%5D=2018-03-22&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iPathId=46814&aGeoCode%5Blat%5D=52.370201&aGeoCode%5Blng%5D=4.895361&iGeoDistanceItem=0&aCategoryRange=0%2C1%2C2%2C3%2C4%2C5&aOverallLiking=1%2C2%2C3%2C4%2C5&sOrderBy=relevance%20desc&bTopDealsOnly=false&iRoomType=7&cpt=4681403&iIncludeAll=0&iViewType=0&bIsSeoPage=false&bIsSitemap=false&
  https://www.trivago.co.uk/?aDateRange%5Barr%5D=2018-03-19&aDateRange%5Bdep%5D=2018-03-22&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iPathId=404053&aGeoCode%5Blat%5D=54.597286&aGeoCode%5Blng%5D=-5.93012&iGeoDistanceItem=0&aCategoryRange=0%2C1%2C2%2C3%2C4%2C5&aOverallLiking=1%2C2%2C3%2C4%2C5&sOrderBy=relevance%20desc&bTopDealsOnly=false&iRoomType=7&cpt=40405303&iIncludeAll=0&iViewType=0&bIsSeoPage=false&bIsSitemap=false&
*/
