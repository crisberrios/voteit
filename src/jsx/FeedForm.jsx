var React = require('react');

var FeedForm = React.createClass({
  propTypes: {
    displayed: React.PropTypes.bool.isRequired,
    onNewItem: React.PropTypes.func.isRequired
  },
  displayName: 'FeedForm',
  handleForm: function(e) {
    e.preventDefault();
    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };
    this.refs.feedForm.getDOMNode().reset();
    this.props.onNewItem(newItem);
  },
  render: function() {
    var displayed = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: displayed
    };

    return (
      <form className="container" id="feedForm" onSubmit={this.handleForm} ref="feedForm" style={styles}>
        <div className="form-group">
          <input className="form-control" placeholder="Title" ref="title" type="text" />
          <input className="form-control" placeholder="Description" ref="desc" type="text"  />
          <button className="btn btn-primary btn-block" type="submit">Add</button>
        </div>
      </form>
    );
  }
});

module.exports = FeedForm;