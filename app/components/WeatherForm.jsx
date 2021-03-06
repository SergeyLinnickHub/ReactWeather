var React = require("react");

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = " ";
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Enter city name"/>

                    <div className="form-group">
                        <button className="btn">Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;