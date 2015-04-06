var React = require('react'),
    FeedItem = require('./FeedItem.jsx');

var FeedList = React.createClass({
  displayName: 'FeedList',
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  render: function() {
    var feedItems = this.props.items.map(function(item) {
      return <FeedItem desc={item.description} title={item.title} voteCount={item.voteCount} />
    });

    return (
      <ul className="list-group container">
        {feedItems}
      </ul>
    );
  }
});

module.exports = FeedList;