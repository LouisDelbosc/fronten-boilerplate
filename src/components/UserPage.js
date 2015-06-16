import React from 'react';
import UserForm from './UserForm';
import MachineList from './MachineList';
import Membership from './Membership';

var UserPage = React.createClass({
    getInitialState: function() {
        return {
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

    render() {
        return (
            <div className="userPage" >
                <UserForm />
                <MachineList info={this.state.infoMachine} />
                <Membership />
            </div>
        );
    }
});

module.exports = UserPage;
