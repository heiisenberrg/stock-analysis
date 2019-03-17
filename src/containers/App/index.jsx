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
  // ResponsiveContainer,
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

  handleChange = selectedOption => {
    console.log(selectedOption);
    this.setState({
      selectedOption
    });
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <Fragment>
        <AppHeader />
        <div className="container-fluid">
          <div className="main row">
            <div className="col-md-6">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={stocks}
                isMulti="true"
                isSearchable="true"
                placeholder=""
                className="custom-dropdown"
              />
            </div>
            <div className="col-md-6 button-groups d-flex">
              <button type="button" className="btn btn-primary">Real Time</button>
              <button type="button" className="btn btn-secondary">1 D</button>
              <button type="button" className="btn btn-secondary">5 D</button>
              <button type="button" className="btn btn-secondary">1 M</button>
              <button type="button" className="btn btn-secondary">YTD</button>
            </div>
          </div>
          <div id="chart-container" className="row d-flex">
            {/* <ResponsiveContainer> */}
            <div className="col-md-6">
              <LineChart
                width={500}
                height={300}
                data={this.expenses}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  // activeDot={{ onClick: handleDataClick }}
                  dot={{ strokeWidth: 2 }}
                  type="monotone"
                  dataKey="value"
                /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
            <div className="col-md-6">
              <BarChart
                width={1000}
                height={700}
                data={sectors}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5
                }}
                stackOffset="expand"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
            {/* </ResponsiveContainer> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(connect(null, null)(App));
