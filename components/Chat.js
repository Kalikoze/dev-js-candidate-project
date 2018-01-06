import React, { Component } from 'react';
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
            display: flex;
            align-items: center;
            height: 15%;
            width: 60%;
          }

          input {
            border: none;
            border-radius: 20px;
            font-size: 2vw;
            height: 5k0px;
            padding-left: 25px;
            width: 100%;
          }
        `}</style>
      </section>
    );
  }
}

Chat.propTypes = {
  addMessage: PropTypes.func.isRequired,
};
