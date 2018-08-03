var React = require("react");

var ErrorModal = React.createClass({
    componentDidMount: function () {
        var modal = new Foundation.Reveal($("error-modal"));
        modal.open();
    },
    render: function(){
        return(
            <div id="error-modal" className="modal">
                <h4>Modal Title</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="btn">Ok</button>
            </div>
        );
    }
});

module.exports = ErrorModal;