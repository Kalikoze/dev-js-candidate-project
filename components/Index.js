import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import ChatContainer from '../containers/ChatContainer';
import { fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke } from '../store';
import Message from '../components/Message';
import Layout from '../components/Layout';
import PlayControls from '../components/PlayControls';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }

  static async getInitialProps({ query }) {
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
    const { fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke } = this.props.fetchJoke;
    const jokeIntents = ['randomjoke', 'nerdyjoke', 'explicitjoke'];
    const getJoke = [fetchRandomJoke, fetchNerdyJoke, fetchExplicitJoke];

    if(jokeIntents.includes(intent)) {
      const index = jokeIntents.indexOf(intent);
      await getJoke[index]();

      return this.setState({messages: [...messages, {message: `${message} ${this.props.currentJoke}`, isUser: !intent ? true : false }]});
    }

    this.setState({messages: [...messages, {message, isUser: !intent ? true : false }]});
  }

  render() {
    const { messages } = this.state;
    const conversation = messages.map((message, i) => <Message key={i} text={message.message} isUser={message.isUser}/>);
    return (
      <Layout>
        <section className='header'>
          <h1>SpruceBot</h1>
          <PlayControls />
        </section>
        <section className='conversation' ref={node => this.convo = node}>
          {conversation}
        </section>
        <ChatContainer addMessage={this.addMessage}/>
        <style jsx>{`
          .header {
            align-items: center;
            color: #FFF;
            display: flex;
            font-family: 'Lato', sans-serif;
            font-size: 72px;
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
            width: 70%;
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
