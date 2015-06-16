var UserStore = {
    _state: {
        isLogged: false,
        userData: [],
    },

    getIsLogged: function() {
        return this._state.isLogged;
    },

    submitForm: function(contentForm) {
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
    },
}
