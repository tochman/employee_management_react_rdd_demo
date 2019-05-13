import React, { Component } from 'react';
import axios from 'axios'

class EmployeeList extends Component {
  state = {
    employees: []
  }
  componentDidMount() {
    axios.get('https://reqres.in/api/users?per_page=4').then(response => {
      this.setState({employees: response.data.data})
    })
  }
  
  render() {
    let employeeListDisplay = this.state.employees.map(employee =>{
      return <li key={employee.id}>{employee.first_name}</li>
    })
    return (
      <>
        <ul>
          {employeeListDisplay}
        </ul>
      </>
    );
  }
}

export default EmployeeList;