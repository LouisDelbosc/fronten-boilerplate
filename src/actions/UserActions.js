import UserStore from '../stores/UserStore'

var UserActions = {

    submitState(userstate){
        UserStore.submitState(userstate);
    }
};

module.exports = UserActions;
