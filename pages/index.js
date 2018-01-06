import React, { Component } from 'react';
import Chat from '../components/Chat';
import Message from '../components/Message';
import Layout from '../components/Layout';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message) {
    const { messages } = this.state;
    this.setState({messages: [...messages, message]});
  }

  render() {
    const { messages } = this.state;
    const conversation = messages.map((message, i) => <Message key={i} text={message}/>);

    return (
      <Layout>
        <h1>SpruceBot</h1>
        <section className='conversation'>
          {conversation}
        </section>
        <Chat addMessage={this.addMessage}/>
      </Layout>
    );
  }
}
