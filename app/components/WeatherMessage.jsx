var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-centered">It is {temp}&deg;C in {location}</h3>
    )
};

module.exports = WeatherMessage;