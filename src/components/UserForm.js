import React from 'react';

var UserForm = React.createClass({

    handleSubmit() {
        // should sent value to useractions
        console.log('submitting stuff');
    },

    render() {
        return (
            <div className="userForm" >
                <form onSubmit={this.handleSubmit} >
                    <input type="text"
                        value={this.props.info.FirstName}
                        ref="firstname"
                    />
                    <input type="text"
                        value={this.props.info.LastName}
                        ref="lastname"
                    />
                    <input type="text"
                        value={this.props.info.UserName}
                        ref="username"
                    />
                    <br />
                    <input type="text"
                        value={this.props.info.Email}
                        ref="email"
                    />
                    <input type="text"
                        value={this.props.info.InvoiceAddr}
                        ref="invoiceAddr"
                    />
                    <input type="text"
                        value={this.props.info.ShipAddr}
                        ref="shipAddr"
                    />
                    <br />
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
