import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Item from './components/Item';
import SubNav from './components/SubNav'
import appleData from './appleData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={ props => <Home {...props} appleData={appleData}/>}/>
        <Route path="/:SubNav" render={ props => <SubNav {...props} appleData={appleData} />}/>
        <Route path="/:SubNav/:Item" render={ props => <Item {...props} appleData={appleData} />}/>
      </div>
    );
  }
}

export default App;
