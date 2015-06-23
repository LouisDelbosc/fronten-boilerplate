var UserStore = {
    _state: {
        userID: 0,
        failToLogin: false,
        isLogged: false,
        // everything @ get /users/{uid}
        rawInfoUser: {
            Id: 1,
            FirstName: "Regular",
            LastName: "User",
            Username: "user",
            Email: "user@example.com",
            InvoiceAddr: 0,
            ShipAddr: 0,
            ClientId: 0,
            B2b: false,
            Company: "",
            VatUserId: "",
            VatRate: 0,
            UserRole: "",
            Created: "0001-01-01T00:00:00Z",
            Comments: ""    
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

    // Logout from server
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

    // Put the information from UserForm in the state 
    // then send it to the server
    submitStateToServer(userState) {
        this.formatUserStateToSendToServer(userState);
        /*
        var _url = '/api/users/' + this._state.userID,

            dataToSend = this._state.infoUser,
            _type = 'PUT';
        getDataFromServer(_url, dataToSend, _type, function() {});
        */
    },

    // To get the User information for the server after login in
    getUserStateFromServer(){
        //getting the initial set of data from the server with the UID
        //CALL API
    },

    // Change the input to match the rawInfoUser format
    formatUserStateToSendToServer(userState) {
        for(var data in userState) {
            this._state.rawInfoUser[data] = userState[data];
        }
    },

    // return a light state with only the useful information
    formatUserStateToSendToUserPage() {
        var infoWhichMatter = [
            'FirstName',
            'LastName', 
            'Username',
            'Email',
            'InvoiceAddr',
            'ShipAddr'
        ];
        var lightState = {};
        for(var index in infoWhichMatter) {
            var name = infoWhichMatter[index];
            lightState[name] = this._state.rawInfoUser[name];
        }
        console.log(lightState);
        return lightState;
    },

    // Getter to the state
    getIsLogged: function() {
        return this._state.isLogged;
    },
    // Use by UserPage to get its state
    getInfoUser: function() {
        var lightState = this.formatUserStateToSendToUserPage();
        return lightState;
    },
    // Use by UserPage to get its state
    getInfoMachine: function() {
        return this._state.infoMachine;
    },

    onChange() {}

};

module.exports = UserStore;
