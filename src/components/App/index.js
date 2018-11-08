import React, {Component} from 'react';

import Input from '../Input'
import Alert from '../Alert';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Input">
            <Input/>
          </div>
          <div className="Alert">
              <Alert/>
          </div>
      </div>
    );
  }
}