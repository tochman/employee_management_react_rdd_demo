import React from 'react';
import EmployeeList from './components/EmployeeList'
import { Container, Header } from 'semantic-ui-react'

function App() {
  return (
    <>
      <Container>
        <Header as='h1' name="header">Employee list</Header>
        <section name="list">
          <EmployeeList />
        </section>
      </Container>

    </>
  );
}

export default App;
