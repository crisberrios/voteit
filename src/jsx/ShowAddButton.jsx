var React = require('react');

var ShowAddButton = React.createClass({
  displayName: 'ShowAddButton',
  render: function() {
    return (
      <button className="btn btn-success btn-block">Create New Item</button>
    );
  }
});

module.exports = ShowAddButton;