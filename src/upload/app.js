var express = require('express');
var path    = require('path');
var app     = express();

app.use(express.static(path.join(__dirname, 'public')));
require('./local.js')(app);

app.listen(3000);
console.log('listen on 3000.')
