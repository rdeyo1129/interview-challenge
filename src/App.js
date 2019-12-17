import React, { Component } from 'react';
import { Button } from './components';
import ListCard from './components/list-card/ListCard';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <ListCard header="test" items={["test1", "test2"]}></ListCard>
        <div className="component-list">
          <Button href="#" theme='go'> Button </Button>
        </div>
      </div>
    );
  }
}

export default App;
