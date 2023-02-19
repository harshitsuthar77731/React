import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';

const App = ()=>{
  
  return ( <div className='App'>
          <Router>
          <div>NavBar <Link to="/"> Home</Link>
           <Link to="/contact"> Contact</Link>
          <Link to="/menu"> Menu</Link></div>

            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<h1>you are not in page</h1>}/>

            </Routes>
          </Router>
  </div>
  )
}




export default App;
