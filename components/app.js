'use strict';
var React = require('react'),
    {ListGroup, ListGroupItem} = require('react-bootstrap'),
    {Link, RouteHandler} = require('react-router')
;

var App = React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="app">React server-side rendering sample</Link></h1>
        <ListGroup>
          <Link to="youtube" key='youtube'><ListGroupItem>youtube</ListGroupItem></Link>
          <Link to="vimeo" key='vimeo'><ListGroupItem>vimeo</ListGroupItem></Link>
        </ListGroup>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = App;
