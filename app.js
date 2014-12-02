'use strict';
var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    Handlebars  = require('handlebars'),
    React       = require('react')
;

require('node-jsx').install({ harmony: true });

var App = require('./components/app');
var data = [
  { id: 1, name: 'backbone' },
  { id: 2, name: 'react' },
  { id: 3, name: 'angular' },
];
var template = Handlebars.compile(fs.readFileSync('./index.hbs').toString());

app.get('/', function(req, res) {
  res.send(template({
    initialData: JSON.stringify(data),
    markup: React.renderToString(React.createElement(App, {data: data}))
  }));
});

app.get('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./browser')
    .transform({ harmony: true }, reactify)
    .bundle()
    .pipe(res)
  ;
});

var port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
