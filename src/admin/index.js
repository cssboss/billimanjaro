var log = require('util').debuglog('admin');
var express = require('express');
var morgan = require('morgan');

var app = module.exports = express();
app.use(morgan('dev'));
app.use(express.static(process.env.static_root));

log('Starting admin server with path ' + process.env.static_root + ' on port ' + process.env.port);
app.listen(process.env.port);
