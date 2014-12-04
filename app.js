'use strict';


var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    Handlebars  = require('handlebars'),
    React       = require('react'),
    Router      = require('react-router')
;

var data = {
  youtube: [
    { id: 'XxVg_s8xAms', title: 'Introduction to React.js' },
    { id: '-DX3vJiqxm4', title: 'Pete Hunt - The Secrets of React\'s Virtual DOM (FutureJS 2014)', },
    { id: 'lAn7GVoGlKU', title: 'Building UIs with ReactJS'}
  ],
  vimeo: [
    {id: '108488724', title: 'Andres Suarez | Server Rendered Single-Page Apps / Day 1'},
    { id: '97516219', title: 'Christian Johansen - Functional UI programming with React.JS and ClojureScript'},
    {id: '92687646', title: 'ReactJS by Adam Solove'}
  ]
};

require('node-jsx').install({ harmony: true });
var routes = require('./routes')();

var template = Handlebars.compile(fs.readFileSync('./index.hbs').toString());

app.get('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./browser')
    .transform({ harmony: true }, reactify)
    .bundle()
    .pipe(res)
  ;
});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    res.send(template({
      initialData: JSON.stringify(data),
      markup: React.renderToString(React.createElement(Handler, {params: {videos: data}}))
    }));
  });
});

var port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);
