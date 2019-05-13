import React from 'react';
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <>
      <section name="header">Employee list</section>
      <section name="list">
        <EmployeeList />
      </section>
    </>
  );
}

export default App;
