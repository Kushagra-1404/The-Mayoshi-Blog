import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  {/* so that react does additional checks during development and gives us warning if there 
  are any warnings to report */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// npx json-server --watch data/db.json --port 8000
//code to spin up the json server
