var React = require("react");
var WeatherForm = require("./WeatherForm");
var WeatherMessage = require("./WeatherMessage");
var ErroModal = require("./ErrorModal");
var openWeatherMap = require("app/api/openWeatherMap.jsx");

var Weather = React.createClass({
    getInitialState: function(){
        return {
			isLoading: false
        }
    },
    handleSearch: function(location){
		var that = this;
		
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined,
        });
        
        openWeatherMap.getTemp(location).then(function (temp){
            that.setState({
				location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage){
            that.setState({
                isLoading: false,
                // errorMessage: e.message
            });
            alert(errorMessage)

        });
    },

    componentDidMount: function(){
        var location = this.props.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },

    render: function () {
		var {isLoading, temp, location, errorMessage} = this.state;
		
		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather ...</h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location} />;
			}
        }
        
        function renderError () {
            if(typeof errorMessage === "string"){
                return (
                    <ErrorModal/>
                )
            } else {

            }
        }

        return (
            <div>
                 <h3 className="page-title">Weather Component</h3>
                 <WeatherForm onSearch={this.handleSearch}/>
                 {renderMessage()}
                 {renderError()}
            </div>
           
        )
    }
})

module.exports = Weather;