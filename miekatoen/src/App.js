import { NavBar } from './components/navbar';
import { Homepage } from './components/Homepage';
import { Footer } from './components/footer';
import './App.css';
import {render} from 'react-dom';
import React from 'react'
//import { homepageData } from './components/mockdata';

function App() {
 
  return (
    <div className="App">
      {rendernav()}

      
      
    </div>
  );
  
  
}
function rendernav(){
  render(<NavBar />, document.getElementById('rootnav') );
}

export default App;
