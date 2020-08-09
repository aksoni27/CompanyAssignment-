import React, { Component } from 'react';
import DataTable from './DataTable'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  async componentDidMount() {
    const url = "http://localhost:8080";
    const response= await fetch(url);
    const newData = await response.json();
    console.log(newData);
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      value: this.state.value
    }
    if (!data.value) {
      window.alert('Fields are missing')
    }

  }
  renderTableData() {
    return this.state.newData.map((info, index) => {
       const { id, name, total} = info //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{total}</td>
          </tr>
       )
    })
 }


  render() {
    return (
      <div className="Container">

        <form onSubmit={this.handleSubmit}>
          <label>Input  {":  "}
            <input type="tel" name="telephone" placeholder="Enter value of N" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            
            {this.renderTableData()}
          </tbody>
        </table>

      </div>
    );
  }
}
export default Input
