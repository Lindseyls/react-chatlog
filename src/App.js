import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';

class App extends Component {
  render() {

    const senderVladimir = chatMessages[0]["sender"];
    const senderEstragon = chatMessages[1]["sender"];
    const messageData = chatMessages;

    console.log(messageData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between {senderVladimir} and {senderEstragon}</h1>
        </header>
        <main className="App-main">
        </main>
      </div>
    );
  }
}

export default App;
