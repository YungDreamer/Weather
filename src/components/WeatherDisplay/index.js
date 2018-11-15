import React, {Component} from "react";

export default class WeatherDisplay extends Component {
    state = {
        weatherData: null
    };

    componentDidMount() {
        const {cityInputValue} = this.props;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}
        &appid=575a00d44d14773e8e5b540938779110&units=metric`;
        fetch(URL)
            .then(res => res.json())
            .then(json => this.setState({weatherData: json}));
    }

    handleError = (weatherData) => {
        console.log(weatherData)
        if (!weatherData) return <div>Loading</div>;
        if (weatherData.cod === "404") return <div> {weatherData.message} </div>;
        if (weatherData.cod === "400") return <div> {weatherData.message} </div>;
    }

    render() {
        const {weatherData} = this.state;
        //{this.handleError(weatherData)};
        if (!weatherData) return <div>Loading</div>;
        if (weatherData.cod === "404") return <div> {weatherData.message} </div>;
        if (weatherData.cod === "400") return <div> {weatherData.message} </div>;
        const {weather, main, wind} = weatherData;
        const {temp, temp_max, temp_min} = main;
        const {speed} = wind;
        return (
            <div>
                {weather.map(({main, icon}) => ({
                    type: main,
                    icon: `http://openweathermap.org/img/w/${icon}.png`
                })).map(({type, icon}) => (<h1>
                    {type} in {weatherData.name}
                    <img src={icon} alt={weatherData.description}/>
                </h1>))}

                <p>Current: {temp}°C</p>
                <p>High: {temp_max}°C</p>
                <p>Low: {temp_min}°C</p>
                <p>Wind Speed: {speed} mi/hr</p>        
            </div>
        );
    }
}