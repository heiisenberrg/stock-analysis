import { call, put } from 'redux-saga/effects';
import {
  getIntradayStockAnalysisSuccess,
  getIntradayStockAnalysisFailure,
  getDailyStockAnalysisSuccess,
  getDailyStockAnalysisFailure,
  getSectorPerformanceSuccess,
  getSectorPerformanceFailure
} from '../actions/stock';

import { intraday, daily, sector } from '../service/stock';

export function* getIntraday(action) {
  const { data } = action;
  try {
    const response = yield call(intraday, data);
    yield put(getIntradayStockAnalysisSuccess(response));
  } catch (e) {
    yield put(getIntradayStockAnalysisFailure(e));
  }
}

export function* getDailyReport(action) {
  const { data } = action;
  try {
    const response = yield call(daily, data);
    yield put(getDailyStockAnalysisSuccess(response));
  } catch (e) {
    yield put(getDailyStockAnalysisFailure(e));
  }
}

export function* getSectorPerformance(action) {
  const { data } = action;
  try {
    const response = yield call(sector, data);
    yield put(getSectorPerformanceSuccess(response));
  } catch (e) {
    yield put(getSectorPerformanceFailure(e));
  }
}
