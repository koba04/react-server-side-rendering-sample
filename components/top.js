'use strict';
var React = require('react'),
    {Link} = require('react-router'),
    {Jumbotron, Button} = require('react-bootstrap')

var Top = React.createClass({
  render() {
    return (
      <Jumbotron>
        <h1>Top</h1>
        <Link to="youtube"><Button>youtube</Button></Link>
        <Link to="vimeo"><Button>vimeo</Button></Link>
      </Jumbotron>
    );
  }
});

module.exports = Top;
