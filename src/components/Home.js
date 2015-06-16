import React from 'react';

var Home = React.createClass({

    statics: {
        willTransitionTo(transition) {
            console.log('ouioui');
            transition.redirect('/about');
        }
    },

    render: function() {
        return (
            <div>Home</div>
        );
    }
});

module.exports = Home;
