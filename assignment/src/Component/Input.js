import React,{Component} from 'react';
import Table from './Table';
import axios from 'axios';
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
    this.setState({value: event.target.value});
  }
  // componentDidMount() {
  //   axios.g('http://localhost:9000/testAPI')
  //     .then(res => {
  //       const data = res.data.data; // get the data array instead of object
  //       this.setState({ data, loading: false });
  //     })
  //     .catch(err => { // log request error and prevent access to undefined state
  //       this.setState({ loading: false, error: true });
  //       console.error(err); 
  //     })
  // }
  handleSubmit=async(e)=>{
    e.preventDefault()
    const data={
      value:this.state.value
    }
    if(!data.value ){
      window.alert('Fields are missing')
    }
    
  }
  
    render() {
      return (
        <div className="Container">
          
          <form onSubmit={this.handleSubmit}>  
          <label>Input  {":  "}
          <input type="tel" name="telephone" placeholder="Enter value of N"  onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          </form>
          <Table />
          
        </div>
      );
    }
  }
  export default Input