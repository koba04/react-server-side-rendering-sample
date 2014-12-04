'use strict';
var React = require('react'),
    VideoMixin = require('../video-mixin'),
    {Grid, Row} = require('react-bootstrap')
;

var Vimeo = React.createClass({
  mixins: [VideoMixin],
  render() {
    return (
      <Grid>
        <h2>youtube</h2>
        <Row className="show-grid">{this.renderVideos('vimeo')}</Row>
      </Grid>
    );
  }
});

module.exports = Vimeo;
