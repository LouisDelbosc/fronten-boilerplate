var App = require('./App');
var Home = require('./Home');
var About = require('./About');
var Login = require('./Login');
var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Routes} = Router;

var routes = (
    <Route name="app" path="/" handler={App} >
        <Route name="about" handler={About} />
        <Route name="home" handler={Home} />
        <DefaultRoute name="login" handler={Login} />
    </Route>
);

Router.run(routes, Router.HistoryLocalion, function(Handler) {
    React.render(<Handler />, document.body);
});
