import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header.component';
import HomePage from './pages/home';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import NotesPage from './pages/notes';
import ViewNotes from './pages/view';
import ProfilePage from './pages/profile';
import AccountCreatedPage from './pages/accountCreated';

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="Signup" element={<SignUpPage />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="Notes" element={<NotesPage /> } />
            <Route path="View/:id" element={<ViewNotes />} />
            <Route path="Profile" element={<ProfilePage />} />
            <Route path="AccountCreated" element={<AccountCreatedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

