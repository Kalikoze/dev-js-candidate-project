import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postMessage } from '../store';
import PropTypes from 'prop-types';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  async submit(e) {
    if (e.keyCode === 13) {
      const { input } = this.state;
      const { addMessage, postMessage } = this.props;

      addMessage(input);
      await postMessage(input);

      const { message, intent } = this.props.response;

      addMessage(message, intent)
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

const mapStateToProps = ({watsonResponse}) => ({ response: watsonResponse.response });

const mapDispatchToProps = dispatch => {
  return {
    postMessage: bindActionCreators(postMessage, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
