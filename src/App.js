import { NavBar } from './components/navbar';
import { Homepage } from './components/Homepage';

import { AboutPage} from './components/aboutpage'
import { ContactPage} from './components/contactPage'
import './App.css';

import React, {useState, useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import { PoppenPage02,PoppenPage23,PoppenPage4Plus } from './components/poppenPage';
import { CategoriePage } from './components/categoriePage';
import DropDownMenu from './components/dropDownMenu.jsx'
//imporDropDownMenu from './components/DropDownMenu';t { homepageData } from './components/mockdata';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openToggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      };
    };

    window.addEventListener('resize', hideMenu);

    return() => {
      window.removeEventListener('resize', hideMenu);
    }
  });
 
  return (
    <div className="App">
      <NavBar openToggle={openToggle}/>
      <DropDownMenu isOpen={isOpen} openToggle={openToggle}/>

       <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/categorie" component={CategoriePage} />
            <Route path="/poppen02" component={PoppenPage02} />
            <Route path="/poppen23" component={PoppenPage23} />
            <Route path="/poppen4plus" component={PoppenPage4Plus} />
            <Route path="/Visie" component={AboutPage} />
            <Route path="/Contact" component={ContactPage} />
          </Switch> 
    </div>
  );
  
  
}

export default App;
