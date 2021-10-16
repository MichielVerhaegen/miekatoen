import { NavBar } from './components/navbar';
import { Homepage } from './components/Homepage';
import { Footer } from './components/footer';
import { AboutPage} from './components/aboutpage'
import { ContactPage} from './components/contactPage'
import './App.css';
import {render} from 'react-dom';
import React from 'react'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { PoppenPage } from './components/poppenPage';
//import { homepageData } from './components/mockdata';

function App() {
 
  return (
    <div className="App">
       <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Poppen" component={PoppenPage} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Contact" component={ContactPage} />
          </Switch> 
    </div>
  );
  
  
}

export default App;
