import React from 'react';
import PropTypes from 'prop-types';

import './Local.css'

import Timestamp from './Timestamp';

class Local extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }

  render() {

      const localName = this.props.name;
      const localBody = this.props.body;
      const localTime = this.props.time;

    return(
      <section className="chat-entry local">
        <div className="entry-name">
          <h3>{localName}</h3>
        </div>
        <div className="entry-bubble">
          <p className="entry-body">
            {localBody}
          </p>
          <p className="entry-time">
            <Timestamp time={localTime} />
          </p>
        </div>
      </section>
    );
  }
}

export default Local;
