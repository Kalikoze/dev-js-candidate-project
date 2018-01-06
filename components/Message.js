import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => (
  <section className='message'>
    <p>{ text }</p>
    <style jsx>{`
      .message {
        background: rgba(255, 255, 255, 0.7);
        border-radius: .6em;
        font-family: 'Lato', sans-serif;
        font-size: 1.5em;
        height: auto;
        margin: 20px;
        padding: 25px;
        position: relative;
        width: 50%;
      }

      .message:after {
        border: 10px solid transparent;
        border-right-color: rgba(255, 255, 255, 0.7);
        border-bottom: 0;
        border-left: 0;
        content: '';
        height: 0;
        left: 0;
        margin-left: -10px;
        position: absolute;
        top: 70%;
        width: 0;
      }
    `}</style>
  </section>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
