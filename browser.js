'use strict';
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes')()
;

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById("app"));
});

//var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
