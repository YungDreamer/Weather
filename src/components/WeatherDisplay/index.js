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

    render() {
        const {weatherData} = this.state;
        if (!weatherData) return <div>Loading</div>;

        //todo ErrorHandler
        if (weatherData.cod === "404") return <div> {weatherData.message} </div>;
        if (weatherData.cod === "400") return <div> {weatherData.message} </div>;
        const {weather} = weatherData;
        //todo add function
        return (
            <div>
                {weather.map(({main, icon}) => ({
                    type: main,
                    icon: `http://openweathermap.org/img/w/${icon}.png`
                })).map(({type, icon}) => (<h1>
                    {type} in {weatherData.name}
                    <img src={icon} alt={weatherData.description}/>
                </h1>))}
                <p>Current: {weatherData.main.temp}°</p>
                <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
        );
    }
}