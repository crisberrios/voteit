var React = require('react');

var FeedItem = React.createClass({
  displayName: 'FeedItem',
  propTypes: {
    voteCount: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <li className="list-group-item">
        <span className="badge badge-success">{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className="pull-right">
            <button className="btn btn-sm btn-primary" id="up">&uarr;</button>
            <button className="btn btn-sm btn-primary" id="down" >&darr;</button>
          </span>
      </li>
    );
  }
});

module.exports = FeedItem;