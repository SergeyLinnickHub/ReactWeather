var React = require("react");
var {Link} = require("react-router");

// var Examples = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <h3>Examples Page</h3>
//             </div>
//         )
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h3>Examples Page</h3>
            <p>A few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Kharkiv">Kharkiv</Link>
                </li>
                <li>
                    <Link to="/?location=Merefa">Merefa</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;