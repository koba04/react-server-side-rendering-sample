var React = require('react'),
    Video = require('react-video'),
    {Jumbotron, Col} = require('react-bootstrap')
;

module.exports = {
  getDefaultProps() {
    return {
      params: {
        videos: {
          youtube: [],
          vimeo: []
        }
      }
    };
  },
  renderVideos(type) {
    return this.props.params.videos[type].map( video => {
      return (
        <Col md={6} md={6} key={video.id}>
          <Jumbotron>
            <Video from={type} id={video.id} />
            <p>{video.title}</p>
          </Jumbotron>
        </Col>
      );
    });
  }
};


