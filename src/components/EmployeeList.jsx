import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

import axios from 'axios'

class EmployeeList extends Component {
  state = {
    employees: []
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?per_page=4').then(response => {
      this.setState({ employees: response.data.data })
    })
  }

  render() {
    let employeeListDisplay = this.state.employees.map(employee => {
      return (

        <List.Item key={employee.id}>
          <Image avatar src={employee.avatar} />
          <List.Content>
            <List.Header as="h3">
              {`${employee.first_name} ${employee.last_name}`}
            </List.Header>
            <List.Description>
              {employee.email}
            </List.Description>
          </List.Content>
        </List.Item>
        // <li key={employee.id}>{employee.first_name}</li>

      )
      
      
    })
    return (
      <>
        <List>
          {employeeListDisplay}
        </List>
      </>
    );
  }
}

export default EmployeeList;