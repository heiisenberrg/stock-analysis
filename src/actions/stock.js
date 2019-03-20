import action from '../constants/stock';

export const getIntradayStockAnalysis = dataId => ({
  type: action.GET_INTRADAY,
  dataId
});

export const getIntradayStockAnalysisSuccess = response => ({
  type: action.GET_INTRADAY_SUCCESS,
  response
});

export const getIntradayStockAnalysisFailure = error => ({
  type: action.GET_INTRADAY_ERROR,
  error
});

export const getDailyStockAnalysis = dataId => ({
  type: action.GET_DAILY_REPORT,
  dataId
});

export const getDailyStockAnalysisSuccess = response => ({
  type: action.GET_DAILY_REPORT_SUCCESS,
  response
});

export const getDailyStockAnalysisFailure = error => ({
  type: action.GET_DAILY_REPORT_ERROR,
  error
});

export const getSectorPerformance = dataId => ({
  type: action.GET_SECTOR_PERFORMANCE,
  dataId
});

export const getSectorPerformanceSuccess = response => ({
  type: action.GET_SECTOR_PERFORMANCE_SUCCESS,
  response
});

export const getSectorPerformanceFailure = error => ({
  type: action.GET_SECTOR_PERFORMANCE_ERROR,
  error
});

