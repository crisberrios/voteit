var React = require('react'),
    FeedItem = require('./FeedItem.jsx');

var FeedList = React.createClass({
  displayName: 'FeedList',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onVote: React.PropTypes.func.isRequired
  },
  render: function() {
    var arr = this.props.items.slice(0);
    arr.sort(function(a,b) {
      return b.voteCount - a.voteCount;
    });
    var feedItems = arr.map(function(item,idx) {
      return (
        <FeedItem description={item.description}
                  key={idx}
                  uid={item.key}
                  onVote={this.props.onVote}
                  title={item.title}
                  voteCount={item.voteCount} />
      )
    }.bind(this));

    return (
      <ul className="list-group container">
        {feedItems}
      </ul>
    );
  }
});

module.exports = FeedList;