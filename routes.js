var React = require('react'),
    {Route, DefaultRoute} = require('react-router'),
    App = require('./components/app'),
    YouTube = require('./components/youtube'),
    Vimeo = require('./components/vimeo'),
    Top = require('./components/top')
;

module.exports = function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="youtube" handler={YouTube} />
      <Route name="vimeo" handler={Vimeo} />
      <DefaultRoute handler={Top} />
    </Route>
  );
};
