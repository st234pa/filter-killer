import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"; 
import FilterKiller from './components/FilterKiller';

function App() {
  return (
    <Router>
      <FilterKiller />
    </Router>
  )
}

export default App;
