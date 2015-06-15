import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
//import AuthStore from './stores/AuthStore';
import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Route, Routes} from 'react-router';

function transitionTest() {
    console.log('test allô');
}

let routes = (
    <Route name="app" path="/" handler={App} >
        <Route name="about" handler={About} />
        <Route name="home" handler={Home} onEnter={transitionTest} />
        <DefaultRoute name="login" handler={Login} />
    </Route>
);

Router.run(routes, Router.HistoryLocalion, function(Handler) {
    React.render(<Handler />, document.body);
});
