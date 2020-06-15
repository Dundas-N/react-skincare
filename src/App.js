import React, { Component }from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import ServicesList from './components/ServicesList';

class App extends Component{
  render(){
    return (
      <main>
        <Navbar />
        <ServicesList />
     </main> 
    ) 
  }
}

export default App;
