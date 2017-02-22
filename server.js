var moment = require('moment');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {    
    res.send('hello world!');
});

app.get('/:time', function(req, res) {
    var timestamp = { unixTimestamp: null, naturalLanguageTimestamp: null };
    var timeParameter = req.params.time;
    if (Number(parseFloat(timeParameter)) == timeParameter) {
        timestamp.unixTimestamp = timeParameter;
        timestamp.naturalLanguageTimestamp = new Date(Number(timeParameter * 1000)).toISOString();
    }
    var momentTime = moment(timeParameter);    
    if (momentTime.isValid()) {
        timestamp.unixTimestamp = momentTime.unix();
        timestamp.naturalLanguageTimestamp = momentTime.toISOString();
    };    
    res.send(timestamp);
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});