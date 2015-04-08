var React         = require('react');
//var _             = require('lodash');
var Firebase      = require('firebase');

var Auth = React.createClass({
  displayName: 'Auth',
  auth: function () {
    var ref = new Firebase('https://blazing-fire-230.firebaseio.com/feed');
    ref.authAnonymously(function (error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        this.setState({
          auth: true
        });
      }
    }.bind(this));
  },
  getInitialState: function () {
    var ref = new Firebase("https://blazing-fire-230.firebaseio.com/feed");
    var authData = ref.getAuth();
    var auth = false;
    if(authData) {
      auth = true;
    }
    return {
      auth: auth
    }
  },
  render: function () {
    return this.state.auth === false ?
      (<button className="login" onClick={this.auth}>Sign in</button>) :
      (<h3 className="login welcome">Welcome!</h3>);
  }
});

module.exports = Auth;