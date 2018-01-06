import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => (
  <section className='message'>
    <p>{ text }</p>
  </section>
);

Message.propTypes = {
  text: PropTypes.string,
};

export default Message;
