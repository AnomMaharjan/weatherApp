import React, { Component } from 'react';
import { ApiCall } from '../apiCall';
import Header from './header';
import { CircularProgress } from '@material-ui/core';
import WeatherCard from './weatherCard';

class WeatherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Kathmandu',
      weatherData: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = () => {
    let self = this;
    ApiCall.getCurrentWeatherData('Kathmandu')
      .then(function (res) {
        self.setState({
          weatherData: res.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            <WeatherCard data={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}

export default WeatherHome;
