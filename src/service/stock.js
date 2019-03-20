import axios from 'axios/index';

const API_KEY = 'apikey=HCINAQ4TW2SBN2Y8';
const URL = 'https://www.alphavantage.co/query?function=';

export const intraday = data => axios({
  method: 'get',
  url: `${URL}'TIME_SERIES_INTRADAY&symbol=${data}&interval=60min&outputsize=full&${API_KEY}`
});

export const daily = data => axios({
  method: 'get',
  url: `${URL}TIME_SERIES_DAILY&symbol=${data}&outputsize=full&${API_KEY}`
});

export const sector = () => axios({
  method: 'get',
  url: `${URL}SECTOR&${API_KEY}`
});
