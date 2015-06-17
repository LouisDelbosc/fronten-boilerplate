import React from 'react';

var UserForm = React.createClass({

    handleChangeForm(e) {
        console.log(e.target);
        this.props.func(e.target.value, e.target.qq);
    },

    handleSubmit() {
        // should sent value to useractions
        console.log('submitting stuff');
    },

    render() {
        var infoUserTmp = new Array();
        for(var data in this.props.info ) {
            var tmp = {};
            tmp['key'] = data;
            tmp['value'] = this.props.info[data];
            infoUserTmp.push(tmp);
            console.log(tmp);
        }
        var NodeInput = infoUserTmp.map(function(info) {
            return (
                <input type="text" placeholder={info.value} 
                />
            );
        });
        return (
            <div className="userForm" >
                <form>
                    {NodeInput}
                    <br />
                    <input type="password"
                        qq="password"
                    />
                    <input type="password"
                        qq="passwordConfirmation"
                    />
                    <button>Okay</button>
                </form>
            </div>
        );
    }
});

module.exports = UserForm;
