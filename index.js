import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Card from './Components/card.js';


class App extends Component {
  

  render() {
    return (
      <div>

        <Card />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
