var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {    
    res.send('hello world!');
});

app.get('/:time', function(req, res) {
    console.log(req.params);
    res.send('hello time!');
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});