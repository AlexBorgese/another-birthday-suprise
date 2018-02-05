import { SET_START_DATE, SET_END_DATE, SET_RANGE } from '../actions/dateActionsConstants';

const initialState = { startDate: '', endDate: '', range: null};

export default function dateReducer(state = initialState , action) {
  let newState = { startDate: '', endDate: '', range: null};
  
	switch (action.type) {
		case SET_START_DATE:
		console.log(action);
			newState.startDate = action.startDate;
			console.log('SET_START_DATE Action')
			return newState;
		case SET_END_DATE:
			newState.endDate = action.endDate;
			console.log('SET_END_DATE Action')
			return newState;
		case SET_RANGE:
			newState.range = action.range;
			newState.endDate = action.range.end._d;
			newState.startDate = action.range.start._d;
			console.log('range Action')
			return newState;
		default:
			return state;
	}
}
