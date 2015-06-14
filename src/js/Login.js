var React = require('react');

var Login = React.createClass({
    render: function() {
        return (
            <div className="login" >
                <p>pour te loger sisi</p>
                <fom>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                </fom>
            </div>
        );
    }
});

module.exports = Login;
