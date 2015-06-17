import React from 'react';

var UserForm = React.createClass({

    handleChangeForm(info) {
        this.props.func(info.key, info.value);
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
        }
        console.log(infoUserTmp);
        var NodeInput = infoUserTmp.map(function(info) {
            return (
                <input type="text" placeholder={info.value} 
                    onChange={this.handleChangeForm.bind(this, info)}
                />
            );
        }, this);
        return (
            <div className="userForm" >
                <form>
                    {NodeInput}
                    <br />
                    <input type="password"
                    />
                    <input type="password"
                    />
                    <button>Okay</button>
                </form>
            </div>
        );
    }
});

module.exports = UserForm;
