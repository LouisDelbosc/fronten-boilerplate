var UserStore = {
    _state: {
        userID: 0,
        failToLogin: false,
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

   /*
    * To make request from the server
    * _url: the url for the API call
    * nameState: the name of the state you'll modify
    * _data: the data you're sending
    * _type: methods you use ('GET', 'POST' etc ...)
    *
    */
    getDataFromServer(_url, stateName, _dataToSend, _type, functionIfFail) {
        $.ajax({
            url: _url,
            dataType: 'json',
            type: _type,
            data: _dataToSend,
            success: function(data) {
                this._state[stateName] = data;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(_url, status, err.toString());
                functionIfFail();
            }.bind(this),
        });
    },

    submitLoginFormToServer(loginInfo) {
        /*
        var _dataToSend = loginInfo,
            _url = '/users/login',
            stateName = 'isLogged',
            _type = 'POST';
        getDataFromServer(_url, stateName, _dataToSend, _type, function() {
            this._state.failToLogin = true;
        });
        */
       this._state.isLogged = true;
        this.onChange();
    },

    logoutFromServer() {
        $.ajax({
            url: '/users/logout',
            dataType: 'json',
            cache: false,
            success: function() {
                this.cleanState(); // TODO: create the function
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/users/logout', status, err.toString())
            }.bind(this)
        });
    },

    submitStateToServer(userState) {
        formatUserState(userState); // TODO: create the function
        var _url = '/api/users/' + this._state.userID,
            dataToSend = this._state.infoUser,
            _type = 'PUT';
        getDataFromServer(_url, dataToSend, _type, function() {});
    },

    // To get the User information for the server after login in
    getUserStateFromServer(){
        //getting the initial set of data from the server with the UID
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

    onChange() {}

};

module.exports = UserStore;
