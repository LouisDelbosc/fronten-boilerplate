var React = require('react');

var Login = React.createClass({

    getInitialState: function() {
        return {
            userName: '',
            password: ''
        };
    },

    handleNameChange: function(e) {
        this.setState({
            userName: e.target.value
        });
    },

    handlePasswordChange: function(e) {
        this.setState({
            password: e.target.value
        });
    },

    clearAndFocus: function() {
        this.setState({userName: '', password: ''}, function() {
            React.findDOMNode(this.refs.name).focus();
        });
    },

    handleSubmit: function(event) {
        event.preventDefault();
        this.clearAndFocus();
    },

    render: function() {
        return (
            <div className="login" >
                <p>Logging page</p>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        ref="name" 
                        value={this.state.userName}
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
