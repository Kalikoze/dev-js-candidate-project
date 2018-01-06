import { Component } from 'react';
import Chat from '../components/Chat';

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
    console.log(messages);

    return (
      <section>
        <h1>SpruceBot</h1>
        <Chat addMessage={this.addMessage}/>
      </section>
    );
  }
}
