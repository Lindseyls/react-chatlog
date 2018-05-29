import React, { Component } from 'react';
import './App.css';

import chatMessages from './data/messages.json';

import Message from './components/Message'

class App extends Component {
  render() {

    const senderVladimir = chatMessages[0]["sender"];
    const senderEstragon = chatMessages[1]["sender"];

    const messageComponents = chatMessages.map((entry, index) => {
      return <Message key={ index } name={entry["sender"]} body={entry["body"]} time={entry["timeStamp"]} />
    });

    console.log(messageComponents);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between {senderVladimir} and {senderEstragon}</h1>
        </header>
        <main className="App-main">
          {messageComponents}
        </main>
      </div>
    );
  }
}

export default App;
