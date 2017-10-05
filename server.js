var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("connent");
  socket.on('new message', function (data) {
    console.log(data);
    socket.broadcast.emit('new message', data);
  });

  socket.on('offer', (data) => {
    console.log(data);
    socket.broadcast.emit('offer', data);
  })

  socket.on('answer', (data) => {
    console.log('ansver', data);
    socket.broadcast.emit('answer', data);
  })

  socket.on('candidate', (data) => {
    socket.broadcast.emit('candidate', data);
  })

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
