import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Contact from './contacts/Contacts';

class App extends Component {
  state = {
    contacts:[
      {id: 1, firstName: 'Bob', phone: '801-123-1234'},
      {id: 2, firstName: 'Rob', phone: '801-123-1235'},
      {id: 3, firstName: 'Steve', phone: '801-123-1236'},
    ]
    
  }


  render() {
    const { contacts } = this.state
    return (
      <Container>
        <Header as='h1'>React Contact List</Header>
        <Contact contacts={contacts} />
      </Container>
    );
  }
}

export default App;
