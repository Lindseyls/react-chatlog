import React from 'react';
import PropTypes from 'prop-types';

import './Message.css'

import Local from './Local';
import Remote from './Remote';

class Message extends React.Component {
  static propTypes = {
    chatEntry: PropTypes.array.isRequired
  }

  render() {

    const chatComponents = this.props.chatEntry.map((entry, index) => {

    if (entry["sender"] === "Vladimir") {
      return <Local key={ index } name={entry["sender"]} body={entry["body"]} time={entry["timeStamp"]} />;
    } else if (entry["sender"] === "Estragon") {
      return <Remote key={ index } name={entry["sender"]} body={entry["body"]} time={entry["timeStamp"]} />;
    }

    });

    return(
      <section className="chat-log">
        {chatComponents}
      </section>
    );
  }
}

export default Message;
