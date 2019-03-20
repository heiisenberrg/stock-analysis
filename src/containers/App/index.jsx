import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  BarChart, Bar
  // Bar, Cell
} from 'recharts';
import AppHeader from '../../components/AppHeader/index';
import { stocks, sectors } from '../../constants/stock-data';
import './style.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      selectedOption: []
    };
    this.options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    this.expenses = [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100
      }
    ];
  }

  handleChange = option => {
    if (option && option.length < 4) {
      this.setState({
        selectedOption: option
      });
    }
  }

  handleClick = option => {
    this.setState({
      filter: option
    });
  }

  render() {
    const { selectedOption, filter } = this.state;
    return (
      <Fragment>
        <AppHeader />
        <div className="container-fluid pb-3">
          <div className="main">
            <div className="row">
              <div className="col-md-6">
                { stocks && stocks.length > 0
                  && (
                  <Select
                    value={selectedOption}
                    classNamePrefix="select"
                    onChange={this.handleChange}
                    options={stocks}
                    isMulti
                    isDisabled={false}
                    isLoading={false}
                    // isClearable={true}
                    isSearchable="true"
                    placeholder=""
                    className="custom-dropdown"
                    components={
                      {
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                        ClearIndicator: () => null
                      }
                    }
                  />
                  )
                }
              </div>
              <div className="col-md-6 button-groups d-flex">
                <button type="button" className={filter === 'Real Time' ? '' : 'btn btn-primary'} onClick={e => this.handleClick('Real Time')}>Real Time</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.handleClick('1D')}>1 D</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.handleClick('5D')}>5 D</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.handleClick('1M')}>1 M</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.handleClick('YTD')}>YTD</button>
              </div>
            </div>
          </div>
          <div id="line-chart-container" className="row">
            <ResponsiveContainer>
              <div className="col-12 p-30">
                <LineChart
                  width={1000}
                  height={500}
                  data={this.expenses}
                  margin={{
                    top: 45,
                    right: 30,
                    left: 20,
                    bottom: 15
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </div>
            </ResponsiveContainer>
          </div>
          <div id="bar-chart-container" className="row">
            <ResponsiveContainer>
              <div className="col-12 p-30">
                <BarChart
                  width={1000}
                  height={500}
                  data={sectors}
                  margin={{
                    top: 130, right: 30, bottom: 10, left: 20
                  }}
                  barGap={1}
                  // layout="vertical"
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    type="category"
                    dataKey="name"
                    orientation="top"
                    padding={{ left: 10 }}
                    angle={-45}
                    interval={0}
                    textAnchor="start"
                    axisLine="false"
                  />
                  <YAxis>
                    <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
                    Vertical Label!
                    </Label>
                  </YAxis>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                  <Bar dataKey="value" barSize={20} fill="#8884d8" />
                </BarChart>
              </div>
            </ResponsiveContainer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(connect(null, null)(App));
