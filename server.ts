const app = require('express')(); 
const http = require('http').createServer(app);
const ioSocket = require('socket.io')(http, {withCredentials: true, origins: '*:*'});
const port = 9999;


const rooms = new Map();


app.get('/rooms', (req, res) => { 
  rooms.set('rooms', '');
  res.json(rooms); 
});

app.post('/rooms', (req, res) => {
  console.log('Hello post')
})

ioSocket.on('connection', (socket) => {
  socket.on('sendMessage', (data) => {
    // socket.json(data.room)
    console.log('message', data.title)
    // rooms.get(data.room).get('/users').socket(socket.id, data)
  })
  console.log('user-socket connected id: ', socket.id);
});



// 'https://react-todolist-10bf5.firebaseio.com/chat/room1.json'
http.listen(port, (error) => {
  if (error) {
    throw Error(error);  
  }
  console.log('server start');
});
  




// установили nodemon для автоизмения в этом файле
  



