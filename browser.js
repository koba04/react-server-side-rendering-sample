'use strict';
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes')()
;

var initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler params={{videos: initialData}} />, document.getElementById("app"));
});

