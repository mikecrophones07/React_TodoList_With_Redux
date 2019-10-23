import React from 'react';
import './App.css';
import ViewGroup from './components/ViewGroup/ViewGroup'

class App extends React.Component {
  render(){
    return (
      <ViewGroup defaultListCount= {0}/>
    );
  }
}

export default App;
