var React         = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm      = require('./FeedForm.jsx');
var FeedList      = require('./FeedList.jsx');
var _             = require('lodash');
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
  componentDidMount: function() {
   this.loadData();
  },
  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false
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
  },
  onVote: function(item) {
    var fb = new Firebase('https://blazing-fire-230.firebaseio.com/feed').child(item.key);
    fb.update(item);
  },
  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        </div>
        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />
        <br />
        <br />
        <FeedList items={this.state.items} onVote={this.onVote} />
      </div>
    );
  }
});

module.exports = Feed;