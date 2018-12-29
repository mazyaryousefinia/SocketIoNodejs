var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Maz = require('./Maz')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb://localhost/my_database');

server.listen(8080);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/reg', function(req, res){
  var newMaz = new Maz({
    name: req.body.name
  })
  io.emit("chat message", newMaz)
  res.send(newMaz)
})

