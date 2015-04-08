var React         = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm      = require('./FeedForm.jsx');
var FeedList      = require('./FeedList.jsx');
//var _             = require('lodash');
var Firebase      = require('firebase');


var Feed = React.createClass({
  displayName: 'Feed',
  loadData: function() {
    var fb = new Firebase('https://blazing-fire-230.firebaseio.com/feed');
    fb.on('value',function(snapshot) {
      var items = [];
      snapshot.forEach(function(snap) {
        var item = snap.val();
        item.key = snap.key();
        items.push(item);
      });
      this.setState({
        items: items
      });
    }.bind(this));
  },
  getAuth: function() {
    var ref = new Firebase("https://blazing-fire-230.firebaseio.com/feed");
    var authData = ref.getAuth();
    var auth = false;
    if(authData) {
      auth = true;
    }
    this.setState({
      auth: auth
    });
    ref.onAuth(function(obj) {
      if(obj) {
        this.setState({
          auth: true
        });
      } else {
        this.setState({
          auth: false
        });
      }
    },this);
  },
  componentDidMount: function() {
   this.loadData();
    this.getAuth();
  },
  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false,
      auth: false
    }
  },
  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function(newItem) {
    var fb = new Firebase('https://blazing-fire-230.firebaseio.com/feed');
    fb.push(newItem);
    this.setState({
      formDisplayed: false
    });
  },
  onVote: function(item) {
    var fb = new Firebase('https://blazing-fire-230.firebaseio.com/feed').child(item.key);
    fb.update(item, function(error){
      if(error) {
        console.log(error);
      }
    });
  },
  render: function() {
    var addButton = this.state.auth ? (<div className="container">
      <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
    </div>) : (<div></div>);

    return (
      <div>
        {addButton}
        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />
        <br />
        <br />
        <FeedList auth={this.state.auth} items={this.state.items} onVote={this.onVote} />
      </div>
    );
  }
});

module.exports = Feed;