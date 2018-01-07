import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  submit(e) {
    if (e.keyCode === 13) {
      const { input } = this.state;

      this.props.addMessage(input);
      fetch('/api/v1/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: input})
      }).then(response => response.json())
        .then(response => console.log(response));
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
        <style jsx>{`
          .input-section {
            align-items: center;
            display: flex;
            height: 15%;
            width: 60%;
          }

          input {
            border: none;
            border-radius: 20px;
            font-family: 'Lato', sans-serif;
            font-size: 2vw;
            height: 50px;
            padding-left: 25px;
            width: 100%;
          }

          input:focus {
            outline: none;
          }
        `}</style>
      </section>
    );
  }
}

Chat.propTypes = {
  addMessage: PropTypes.func.isRequired,
};
