'use strict';
var React = require('react'),
    Video = require('react-video'),
    {Jumbotron,Grid, Row, Col} = require('react-bootstrap'),
    initialData = require('../initial-data')()
;

var YouTube = React.createClass({
  getDefaultProps() {
    var videos = initialData != null ? initialData.youtube : []
    return {
      videos: videos
    };
  },
  render() {
    var videos = this.props.videos.map( video => {
      return (
        <Col xs={6} md={4}>
          <Jumbotron>
            <Video from='youtube' id={video.id} />
            <p>{video.title}</p>
          </Jumbotron>
        </Col>
      );
    });
    return (
      <Grid>
        <h2>youtube</h2>
        <Row className="show-grid">{videos}</Row>
      </Grid>
    );
  }
});

module.exports = YouTube;
