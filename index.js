'use strict';

var path = require('path');
var fs = require('fs');
var open = require('open');
var nodeModules = path.resolve(path.resolve(__dirname, ''), 'node_modules');
var express = require('express');
var app = express();

function view(swaggerFile, port, hostname,folder) {

  app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
  });

  app.get('/swagger-ui.css', function(req, res) {
    res.sendFile(nodeModules + "/swagger-ui-dist/swagger-ui.css");
  });

  app.get('/swagger-ui-bundle.js', function(req, res) {
    res.sendFile(nodeModules + "/swagger-ui-dist/swagger-ui-bundle.js");
  });

  app.get('/swagger-ui-standalone-preset.js', function(req, res) {
    res.sendFile(nodeModules + "/swagger-ui-dist/swagger-ui-standalone-preset.js");
  });

  app.get('/swagger.yaml', function(req, res) {
    res.header("Content-Type",'application/yaml');
    res.send(fs.readFileSync(swaggerFile));
  });
  app.listen(port,hostname, function() {
    open('http://' + hostname + ':' + port);
  });
}

module.exports = {
  view: view
}