'use strict';

var React = require('react');

var Feed = require('../jsx/Feed.jsx');
var Auth = require('../jsx/Auth.jsx');

React.render( <Feed />, document.getElementById('container'));
React.render( <Auth />, document.getElementById('auth'));

