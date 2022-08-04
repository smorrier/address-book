import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ContactDetails, Contacts } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Contacts/> } />
        <Route path="/details/:id" element={ <ContactDetails/> } />
      </Routes>
    </div>
  );
}

export default App;
