import React from 'react';

var UserForm = React.createClass({

    getInitialState: function() {
        return {
            infoUser: [
                {
                    FirstName: 'jean jacques'
                }
            ]
        };
    },

    componentDidMount: function() {
        console.log('oui');
        /*
        console.log(this.state);
        console.log(this.state.infoUser);
        console.log(this.state.infoUser.FirstName);
        */
    },

    render() {
        return (
            <div className="userForm" >
                <form >
                    <input type="text"
                        value={this.state.infoUser.FirstName}
                        ref="firstname"
                    />
                    <input type="text"
                        value={this.state.infoUser.LastName}
                        ref="lastname"
                    />
                    <input type="text"
                        value={this.state.infoUser.UserName}
                        ref="username"
                    />
                    <input type="text"
                        value={this.state.infoUser.Email}
                        ref="email"
                    />
                    <br />
                    <input type="text"
                        value={this.state.infoUser.InvoiceAddr}
                        ref="invoiceAddr"
                    />
                    <input type="text"
                        value={this.state.infoUser.ShipAddr}
                        ref="shipAddr"
                    />
                    <input type="password"
                        ref="password"
                    />
                    <input type="password"
                        ref="passwordConfirmation"
                    />
                    <button>Okay</button>
                </form>
            </div>
        );
    }
});

module.exports = UserForm;
