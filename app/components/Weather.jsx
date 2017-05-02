var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
      return {
         isLoading: false,
         error: undefined,
         location: undefined,
         temp: undefined
      }  
    },
    handleSearch: function(location){        
        var that = this;
        
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });            
        })
    },
    componentDidMount: function(){
        var location = this.props.location.query.location;

        if (typeof location === 'string' && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;

        if (typeof location === 'string' && location.length > 0){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function(){
        var {temp, location, isLoading, errorMessage} = this.state;

        function renderMessage() {            
            if (isLoading) {
                return <h3>Fetching weather&hellip;</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        };

        function renderError(){
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                )                
            }
        };

        return (
            <div>
                <h1 className="text-center page-title">Get weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()} 
                {renderError()}               
            </div>            
        )
    }
})

module.exports = Weather;