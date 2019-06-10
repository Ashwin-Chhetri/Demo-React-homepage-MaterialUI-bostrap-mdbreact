import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Paperbase from './Paperbase';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <Router>
      <Paperbase></Paperbase>
    </Router>
    
  );
}

export default App;
