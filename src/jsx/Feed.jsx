var React         = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm      = require('./FeedForm.jsx');
var FeedList      = require('./FeedList.jsx');

var Feed = React.createClass({

  getInitialState: function() {
    var FEED_ITEMS = [
      { key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
      { key: '2', title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
      { key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15}
    ];
    return {
      items: FEED_ITEMS
    }
  },

  render: function() {
    return (
      <div>

        <div className="container">
          <ShowAddButton />
        </div>

        <FeedForm />

        <br />
        <br />

        <FeedList items={this.state.items} />

      </div>
    );
  }

});

module.exports = Feed;