import React from 'react';
import LoginActions from '../actions/LoginActions';

var Login = React.createClass({

    getInitialState: function() {
        return {
            username: '',
            password: ''
        };
    },

    // To save Username and password before sending them
    handleChange: function(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    },
    // Clear the state before sending the form
    clearAndFocus: function() {
        this.setState({username: '', password: ''}, function() {
            React.findDOMNode(this.refs.name).focus();
        });
    },

    // Sending the form
    handleSubmit: function(event) {
        event.preventDefault();
        LoginActions.submitForm(this.state);
        this.clearAndFocus();
    },

    render: function() {
        return (
            <div classname="login" >
                <p>Logging page</p>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        ref="name" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="username" 
                    />
                    <input
                        type="password" 
                        name="password"
                        ref="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="password" 
                    />
                    <button type="submit" > Submit </button>
                </form>
            </div>
        );
    }
});

module.exports = Login;
