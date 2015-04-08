var React = require('react');

var FeedItem = React.createClass({
  displayName: 'FeedItem',
  propTypes: {
    voteCount: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    onVote: React.PropTypes.func.isRequired,
    uid: React.PropTypes.any,
    auth: React.PropTypes.bool
  },
  vote: function(count) {
    var obj= {
      key: this.props.uid,
      title: this.props.title,
      description: this.props.description,
      voteCount: count
    };
    this.props.onVote(obj);
  },
  voteUp: function() {
   this.vote(parseInt(this.props.voteCount, 10)+1);
  },
  voteDown: function() {
    this.vote(parseInt(this.props.voteCount, 10)-1);
  },
  render: function() {
    var badge = this.props.voteCount >= 0 ? 'badge badge-success' : 'badge badge-danger';
    var pullRight = this.props.auth === true ? (<span className="pull-right">
      <button className="btn btn-sm btn-primary" id="up" onClick={this.voteUp}>&uarr;</button>
      <button className="btn btn-sm btn-primary" id="down" onClick={this.voteDown} >&darr;</button>
      </span>) : (<span className="pull-right"></span>);

    return (
      <li className="list-group-item">
        <span className={badge}>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.description}</span>
        {pullRight}
      </li>
    );
  }
});

module.exports = FeedItem;