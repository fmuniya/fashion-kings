//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Directory from './components/directory/directory.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';


function App() {
  return (
   <Routes>
      <Route path = '/' element = {<Navigation />}>
        <Route index element = {<Home />} />
        <Route path='contact' element = {<Contact />} />
        <Route path='shop' element = {<Shop />} />
        <Route path='auth' element = {<Authentication />} />


      </Route>
   </Routes>
  );
}

export default App;