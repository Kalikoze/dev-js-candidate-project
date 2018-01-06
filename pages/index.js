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

  componentDidUpdate() {
    this.convo.scrollTop = this.convo.scrollHeight;
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
