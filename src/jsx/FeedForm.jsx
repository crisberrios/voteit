var React = require('react');

var FeedForm = React.createClass({
  displayName: 'FeedForm',
  render: function() {
    return (
      <form className="container">
        <div className="form-group">
          <input className="form-control" placeholder="Title" type="text" />
          <input className="form-control" placeholder="Description" type="text" />
          <button className="btn btn-primary btn-block" type="submit">Add</button>
        </div>
      </form>
    );
  }
});

module.exports = FeedForm;