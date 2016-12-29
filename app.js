var express = require('express')
var morgan = require('morgan')
var exec = require('execa');
var plist = require('plist');

var app = express()

var logFormat = "'[:date[iso]] - :remote-addr - :method :url :status :response-time ms - :res[content-length]b'"
app.use(morgan(logFormat))

app.get('/_ping', function(req, res){
  res.send('OK');
})

app.get('/HIDIdleTime', function(req, res){
  var ioreg = '/usr/sbin/ioreg'
  exec(ioreg, ['-a', '-r', '-n', 'IOHIDSystem']).then(function(result) {
    return res.json(plist.parse(result.stdout)[0]["HIDIdleTime"] / 1000000000)
  }).catch(function(err) {
    console.log(err)
    return res.sendStatus(500)
  })
})

app.listen(process.env.PORT || 8282);
