import { SET_END_DATE, SET_START_DATE, SET_RANGE } from './dateActionsConstants';

export function setEndDate(endDate) {
  return { 
    	type: SET_END_DATE,
		endDate
	};
}

export function setStartDate(startDate) {
	return { 
		  type: SET_START_DATE,
		  startDate
	  };
  }
  export function setRange(range) {
	return { 
		  type: SET_RANGE,
		  range
	  };
  }
