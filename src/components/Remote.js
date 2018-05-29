import React from 'react';
import PropTypes from 'prop-types';

import './Remote.css';

import Timestamp from './Timestamp';

class Remote extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }

  render() {

      const remoteName = this.props.name;
      const remoteBody = this.props.body;
      const remoteTime = this.props.time;

    return(
      <section className="chat-entry remote">
        <div className="entry-name">
          <h3>{remoteName}</h3>
        </div>
        <div className="entry-bubble">
          <p className="entry-body">
            {remoteBody}
          </p>
          <p className="entry-time">
            <Timestamp time={remoteTime} />
          </p>
        </div>
      </section>
    );
  }
}

export default Remote;
