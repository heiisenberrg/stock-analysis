import { takeLatest } from 'redux-saga/effects';
import constants from '../constants/stock';
import { getIntraday, getDailyReport, getSectorPerformance } from './stock.js';

export default function* saga() {
  yield takeLatest(constants.GET_INTRADAY, getIntraday);
  yield takeLatest(constants.GET_DAILY_REPORT, getDailyReport);
  yield takeLatest(constants.GET_SECTOR_PERFORMANCE, getSectorPerformance);
}
