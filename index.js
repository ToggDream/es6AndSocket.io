var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    //res.send('<h1>Hello world</h1>');
    res.sendFile('/workspace/es6/client.html');
});
io.emit('some event',{ for: 'everyone' });

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    //接受客户端发送事件
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        console.log(20,'xxx',everyone);
        sessionStorage.setItem('socket.io')
        io.emit('chat message',msg);
    });
    //广播
    //socket.broadcast.emit('hi');

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

