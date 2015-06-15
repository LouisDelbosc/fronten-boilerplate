var React = require('react');
var {Link, RouteHandler} = require('react-router');

var App = React.createClass({
    render: function() {
        return (
            <div className="app" >
                <ul>
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                </ul>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;
