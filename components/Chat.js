import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  async submit(e) {
    if (e.keyCode === 13 || e.button === 0) {
      const { input } = this.state;
      const { addMessage, postMessage } = this.props;

      addMessage(input);
      await postMessage(input);

      const { message, intent } = this.props.response;

      addMessage(message, intent || '#dont_understand');
      this.setState({input: ''});
    }
  }

  render() {
    const { input } = this.state;
    return (
      <section className='input-section'>
        <input
          placeholder='Chat with SpruceBot here...'
          value={input}
          onChange={e => this.setState({input: e.target.value})}
          onKeyDown={e => this.submit(e)}
        />
        <button onClick={e => this.submit(e)}></button>
        <style jsx>{`
          .input-section {
            align-items: center;
            display: flex;
            height: 15%;
            width: 70%;
          }

          input {
            border: none;
            border-radius: 25px;
            font-family: 'Lato', sans-serif;
            font-size: 28px;
            height: 50px;
            padding-left: 25px;
            width: 100%;
          }

          input:focus {
            outline: none;
          }

          button {
            background : url('../static/right-arrow.svg') #4B9DF6 no-repeat center / 50%;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            height: 40px;
            outline: none;
            position: absolute;
            right: 15.7%;
            width: 40px;
          }

          button:active {
            background-color: #8EBBF4;
          }

          @media (max-width: 950px) {
            input { font-size: 20px; }
          }

          @media (max-width: 460px) {
            input { font-size: 12px; }
          }
        `}</style>
      </section>
    );
  }
}

Chat.propTypes = {
  addMessage: PropTypes.func.isRequired,
  response: PropTypes.object,
};
