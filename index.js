var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Game = require('./game.js');
var game = new Game();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
//     io.emit('system', socket.id + 'disconnected.');
  });
  
  socket.on('guess', function(msg){
    var result = game.guess(msg.num);
    console.log(msg.name + ' just tried ' + msg.num + '. The result is ' + result);
    if (result === 0){
      console.log(msg.name + ' has won the game.');
    }

    io.emit('update', { name: msg.name, guess: msg.num, result: result});
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *: 3000');
});
