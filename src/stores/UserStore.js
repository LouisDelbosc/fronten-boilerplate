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
       console.log(contentForm);
   },

   //try to make it more general
   gettingUserFromServer(uid) {
       $.ajax({
           url: 'API CALL', // /users/{uid}
           dataType: 'json',
           type:'GET',
           data: uid,
           success: function(User) {
               this._state.infoUser = User;
           },
           error: function(xhr, status, err) {
               console.error('api call', status, err.toString());
           },
       });
   },

    // Getter to the state
    getIsLogged: function() {
        return this._state.isLogged;
    },
    // Use by UserPage to get its state
    getInfoUser: function() {
        return this._state.infoUser;
    },
    // Use by UserPage to get its state
    getInfoMachine: function() {
        return this._state.infoMachine;
    },

    // Need to format the infoUser data correctly
    // So it is recognize by the API
    submitState(userstate) {
        var loggedIn = this.state.isLogged;
        console.log('from user store');
        loggedIn = true;
        console.log(loggedIn);
        console.log(this.state.isLogged);
        console.log(userstate);
    }

};
module.exports = UserStore;
