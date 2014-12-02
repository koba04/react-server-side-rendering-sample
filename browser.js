'use strict';
var React = require('react'),
    App   = require('./components/app')
;

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<App data={data} />, document.getElementById("app"));
