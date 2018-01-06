import { Component } from 'react';
import Chat from '../components/Chat';

export default class Index extends Component {
  render() {
    return (
      <section>
        <h1>SpruceBot</h1>
        <Chat />
      </section>
    );
  }
}
