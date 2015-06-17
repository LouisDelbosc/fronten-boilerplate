import UserStore from '../stores/UserStore'

var UserActions = {

    submitState(object){
        UserStore.submitState(object);
    }
};

module.exports = UserActions;
