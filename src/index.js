import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';
import Input from './input.js';


//ReactDOM.render(<App />, document.getElementById('root'));

function GetInputValue(){
    alert(document.getElementById("inputtest").value);
}

function OkButton() {
    return (
      <Button variant="contained" color="primary" onClick={GetInputValue}>
        Alert
      </Button>
    );
}


ReactDOM.render(<Input />, document.querySelector('#input'));
ReactDOM.render(<OkButton />, document.querySelector('#button'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
