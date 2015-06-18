import UserStore from '../stores/UserStore';

var LoginActions = {
    submitLoginForm: function(content) {
        UserStore.submitLoginForm(content);
    }
};

module.exports = LoginActions;
