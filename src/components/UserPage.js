import React from 'react';
import UserForm from './UserForm';
import MachineList from './MachineList';
import Membership from './Membership';

var UserPage = React.createClass({
    getInitialState: function() {
        // should get state from store
        return {
            // everything @ get /users/{uid}
            infoUser: { 
                FirstName: 'jean jacques',
                LastName: 'Rousseau',
                UserName: 'jjr',
                Email: 'jjr@jjr.com',
                InvoiceAddr: 'add invoice',
                ShipAddr: 'ship addr'
            },
            // everything @ get /users/{uid}/machinepermissions
            infoMachine: [
                {
                    Id: '1',
                    Name: 'ouioui',
                    Shortname: 'oui',
                    Description: 'du oui à foison'
                },
                {
                    Id: '2',
                    Name: 'ouinon',
                    Shortname: 'non',
                    Description: 'ok'
                }
            ]
        };
    },

    // Change the state of the input related
    handleChangeForm(event) {
        var tmpState = this.state.infoUser;
        tmpState[event.target.id] = event.target.value;
        this.setState({
            infoUser: tmpState
        });
    },

    render() {
        return (
            <div className="userPage" >
                <UserForm info={this.state.infoUser} func={this.handleChangeForm} />
                <MachineList info={this.state.infoMachine} />
                <Membership />
            </div>
        );
    }
});

module.exports = UserPage;
