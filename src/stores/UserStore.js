var UserStore = {
    _state: {
        isLogged: false,
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
            }
        ]
    },

    // Getter to the state
    getIsLogged: function() {
        return this._state.isLogged;
    },
    getInfoUser: function() {
        return this._state.infoUser;
    },
    getInfoMachine: function() {
        return this._state.infoMachine;
    },

    submitState(object) {
        console.log(object);
    },

    submitLoginForm: function(contentForm) {
        /*
        $.ajax({
            url: this.state.url.userLogin,
            dataType: 'json',
            type: 'POST',
            data: contentForm,
            success: function(response) {
                this._state.UserId = reponse.UserId;
            },
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            },
        });
        */
       console.log('login submit done');
    }
};

module.exports = UserStore;
