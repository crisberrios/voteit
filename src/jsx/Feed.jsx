var React         = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm      = require('./FeedForm.jsx');
var FeedList      = require('./FeedList.jsx');
var _             = require('lodash');

var Feed = React.createClass({
  displayName: 'Feed',
  getInitialState: function() {
    var FEED_ITEMS = [
      { key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
      { key: '2', title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
      { key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15}
    ];
    return {
      items: FEED_ITEMS,
      formDisplayed: false
    }
  },
  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function(newItem) {
  this.setState({
    items: this.state.items.concat([newItem]),
    formDisplayed: false,
    key: this.state.items.length
  });
  },
  onVote: function(item) {
    var items = _.uniq(this.state.items);
    var index = _.findIndex(items,function(feedItem) {
      return item.key === feedItem.key;
    });
    var oldObj = items[index];
    var newItems = _.pull(items,oldObj);
    newItems.push(item);
    this.setState({
      items: newItems
    });
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