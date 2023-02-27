import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header'
import HomePage from './pages/home';
//import {UUID} from 'uuid-generator-ts';

function App() {

  //const uuid = new UUID();

  // Get a dash free UUID as string 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
  //let user_id = uuid.getDashFreeUUID();
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

