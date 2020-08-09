import React, { Component } from 'react';
import DataTable from './DataTable'
//import SearchBar from './SearchBar';
//import ProductTable from './ProductTable';
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
    fetch(url)
    .then((response)=>response.json())
    const newdata = await response.json();
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
  dataTable() {
      return (
        {
            
                
              <tr>
              <td>
                  
              </td>
              <td>
                  {newArray.name}
              </td>
              <td>
                  {newArray.total}
              </td>
              </tr>
              </div>
              )
            )
      }
          
      );
  
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
            {this.dataTable()}
          </tbody>
        </table>

      </div>
    );
  }
}
export default Input