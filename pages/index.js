import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { bindActionCreators } from 'redux';
import { fetchRandomJoke, Store } from '../store';
import withRedux from 'next-redux-wrapper';
import Chat from '../components/Chat';
import Message from '../components/Message';
import Layout from '../components/Layout';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }

  static async getInitialProps({query, store}) {
    store.dispatch(fetchRandomJoke());
    return query;
  }

  componentDidMount() {
    const { messages } = this.state;
    const { message } = this.props;
    if(this.props.message) {
      this.setState({messages: [...messages, {message, isUser: false}]})
    }
  }

  componentDidUpdate() {
    this.convo.scrollTop = this.convo.scrollHeight;
  }

  async addMessage(message, intent) {
    const { messages } = this.state;

    if (intent === 'randomjoke') {
      const { fetchRandomJoke } = this.props;
      await fetchRandomJoke();

      return this.setState({messages: [...messages, {message: `${message} ${this.props.currentJoke}`, isUser: !intent ? true : false }]})
    }

    this.setState({messages: [...messages, {message, isUser: !intent ? true : false }]});
  }

  render() {
    const { messages } = this.state;
    const conversation = messages.map((message, i) => <Message key={i} text={message.message} isUser={message.isUser}/>);
    return (
      <Layout>
        <h1>SpruceBot</h1>
        <section className='conversation' ref={node => this.convo = node}>
          {conversation}
        </section>
        <Chat addMessage={this.addMessage}/>
        <style jsx>{`
          h1 {
            align-items: center;
            color: #FFF;
            display: flex;
            font-family: 'Lato', sans-serif;
            font-size: 5vw;
            font-weight: 700;
            height: 20%;
            justify-content: center;
            width: 100%;
          }

          .conversation {
            display: flex;
            flex-direction: column;
            height: 65%;
            overflow-y: scroll;
            width: 80%;
          }
        `}</style>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ currentJoke: state.randomJoke })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomJoke: bindActionCreators(fetchRandomJoke, dispatch),
  }
}

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(Index)
