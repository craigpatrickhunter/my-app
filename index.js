import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1 class="top-header"> Braingeneers Picroscope Imaging</h1>
        </div>
        <Form/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
