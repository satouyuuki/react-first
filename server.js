const express = require('express');
const app = express();
const server = require('http').createServer(app);
const portNumber = 3000;
server.listen(portNumber, () => {
  console.log('起動しました', 'http://localhost' + portNumber);
});

app.use('/public', express.static('./public'));
app.get('/', (req, res) => {
  res.redirect(302, '/public');
});

const soketio = require('socket.io');
const io = socketio.listen(server);

io.on('connection', (socket) => {
  // ユーザが接続してきた時の処理
  console.log('Access to User:', socket.client.id);
  socket.on('chatMessage', (msg) => {
    // メッセージ受信時の処理
    console.log('message', msg);
    io.emit('chatMessage', msg);
    // 全てのユーザにメッセージを送信
  });
});