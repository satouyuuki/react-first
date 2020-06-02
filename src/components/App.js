import React, { Component } from 'react';
import socketio from 'socket.io-client';
import Form from './Form';

const socket = socketio.connect('http://localhost:3000');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logs: []
    }
  }
  componentDidMount() {
    socket.on('chatMessage', (obj) => {
      // WebSocketサーバーからchatMessageを受ける
      const logs2 = this.state.logs;
      // logs2に今までのlogを格納する
      obj.key = 'key_' + (this.state.logs.length + 1);
      console.log(obj);
      logs2.unshift(obj);
      this.setState({ logs: logs2 });
    })
  }

  render() {
    const messages = this.state.logs.map(e => (
      <div key={e.key}>
        <span>{e.name}</span>
        <span>: {e.message}</span>
        <p />
      </div>
    ))
    // ログの設定。今までのname, messageをkeyごとに表示する
    return (
      <div>
        <h1 id="title">Reactチャット</h1>
        <ChatForm />
        <div id="log">{messages}</div>
      </div>
    )
  }
}
export default App