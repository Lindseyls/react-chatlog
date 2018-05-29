import React from 'react';
import PropTypes from 'prop-types';

import Timestamp from './Timestamp';

class Message extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date),
  }
  
  render() {

    const entryName = this.props.name;
    const entryBody = this.props.body;
    const entryTime = this.props.time;

    return(
      <div>
        {entryName}
        {entryBody}
        <p>
          <Timestamp time={entryTime} />
        </p>
      </div>
    );
  }
}

export default Message;
