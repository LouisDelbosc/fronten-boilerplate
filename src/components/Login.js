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
    handleNameChange: function(e) {
        this.setState({
            username: e.target.value
        });
    },

    handlePasswordChange: function(e) {
        this.setState({
            password: e.target.value
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
                        value={this.state.username}
                        onChange={this.handleNameChange}
                        placeholder="username" 
                    />
                    <input
                        type="password" 
                        ref="password" 
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        placeholder="password" 
                    />
                    <button type="submit" > Submit </button>
                </form>
            </div>
        );
    }
});

module.exports = Login;
