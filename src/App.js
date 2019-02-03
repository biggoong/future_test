import React, { Component } from 'react';
import './App.css';
import Buttons from "./Components/buttons/buttons";
import Table from "./Components/table/table";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      small_data: null,
      large_data: null,
      current_data: null
    }
  }

  componentDidMount(){
    axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
    .then(json => {
      //console.log(json.data);
      this.setState({
        small_data: json.data
      })
    });

    axios.get('http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
    .then(json => {
      //console.log(json.data);
      this.setState({
        large_data: json.data
      })
    })
  }

  handleClick = (e) => {
    let text = e.target.innerText;
    //console.log(text);
    if(text === 'Small data'){
      this.setState({current_data: this.state.small_data});
    } else if(text === 'Large data'){
      this.setState({current_data: this.state.large_data});
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Get data</h2>
        <Buttons onClick={this.handleClick}/>
        <Table data={this.state.current_data}/>
      </div>
    );
  }
}

export default App;
