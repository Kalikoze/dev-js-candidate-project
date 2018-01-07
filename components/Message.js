import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text, isUser }) => (
  <section className={isUser ? 'message' : 'message watson'}>
    <p>{ text }</p>
    <style jsx>{`
      .message {
        background: rgba(255, 255, 255, 0.8);
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
        border-right-color: rgba(255, 255, 255, 0.8);
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

      .watson {
        align-self: flex-end;
        color: #FFF;
        background: rgba(95, 140, 200, 0.8);
      }

      .watson:after {
        border: 10px solid transparent;
        border-left-color: rgba(95, 140, 200, 0.8);
        border-right: 0;
        border-bottom: 0;
        left: auto;
        margin-right: -10px;
      	right: 0;
      }
    `}</style>
  </section>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

export default Message;
