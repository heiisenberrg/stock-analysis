import { fromJS } from 'immutable';

import actions from '../constants/stock';

const initialState = fromJS({
  sensorId: ''
});

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_INTRADAY:
      return state
        .set('loading', true);
    case actions.GET_INTRADAY_SUCCESS:
      return state
        .set('loading', false);
    case actions.GET_INTRADAY_ERROR:
      return state
        .set('loading', false);
    case actions.GET_DAILY_REPORT:
      return state
        .set('loading', true);
    case actions.GET_DAILY_REPORT_SUCCESS:
      return state
        .set('loading', false);
    case actions.GET_DAILY_REPORT_ERROR:
      return state
        .set('loading', false);
    case actions.GET_SECTOR_PERFORMANCE:
      return state
        .set('loading', true);
    case actions.GET_SECTOR_PERFORMANCE_SUCCESS:
      return state
        .set('loading', false);
    case actions.GET_SECTOR_PERFORMANCE_ERROR:
      return state
        .set('loading', false);
    default:
      return state;
  }
};

export default stockReducer;
