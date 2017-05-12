import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Header } from './components/header.js';

class App extends Component {
  constructor() {
    super();
    
    this.state = { 
      clicked: false 
    };
  }
  
  render() {

    const btnClicked = () => {
      this.setState({
        clicked: !this.state.clicked
      });
    }

    const printLogo = () => {
      if(this.state.clicked) {
        return <h2>Hello react</h2>;
      }
      return <h2>Not Clicked</h2>
    }

    return (
      <div className="App">
       <Header logoText={printLogo()} logo={logo}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={ btnClicked } bsStyle="danger">adfadfa</Button>
      </div>
    );
  }
}

export default App;
