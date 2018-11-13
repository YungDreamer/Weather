import React, { Component } from "react";
  
  export default class WeatherDisplay extends Component {
    constructor() {
      super();
      this.state = {
        weatherData: null
      };
    }
    componentDidMount() {
      const {cityInputValue} = this.props;
      const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityInputValue +
        "&appid=575a00d44d14773e8e5b540938779110&units=metric";
      fetch(URL)   //fetch(URL) - отправка запроса, fetch возвращает объект как Promise.
      .then(res => res.json()) //function(res){  return res.json(); },   возвращает тело как обещание с содержанием json
      .then(json => {this.setState({ weatherData: json });   //json передаём в функцию, которая устанавливает состояние компонента
      });
    }
    
    render() {    
      const weatherData = this.state.weatherData;
      if (!weatherData) return <div>Loading</div>;
      if (weatherData.cod=="404") return <div> {weatherData.message} </div>
      const weather = weatherData.weather[0];
      const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
      return (
        <div>
          <h1>
            {weather.main} in {weatherData.name}
            <img src={iconUrl} alt={weatherData.description} />
          </h1>
          <p>Current: {weatherData.main.temp}°</p>
          <p>High: {weatherData.main.temp_max}°</p>
          <p>Low: {weatherData.main.temp_min}°</p>
          <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
        </div>
      );
    }
  }