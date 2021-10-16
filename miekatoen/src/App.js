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
import { PoppenPagej3,PoppenPage34,PoppenPage4Plus } from './components/poppenPage';
import { CategoriePage } from './components/categoriePage';
//import { homepageData } from './components/mockdata';

function App() {
 
  return (
    <div className="App">
       <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/categorie" component={CategoriePage} />
            <Route path="/poppenjonger3" component={PoppenPagej3} />
            <Route path="/poppen34" component={PoppenPage34} />
            <Route path="/poppen4plus" component={PoppenPage4Plus} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Contact" component={ContactPage} />
          </Switch> 
    </div>
  );
  
  
}

export default App;
