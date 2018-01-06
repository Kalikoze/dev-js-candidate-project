import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => (
  <section className='message'>
    <p>{ text }</p>
  </section>
);

Message.propTypes = {
  text: PropTypes.array.isRequired,
};

export default Message;
