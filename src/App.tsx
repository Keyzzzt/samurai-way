import React from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';

function App() {
  return (
      <div className="app">
        <div className='header'>
          <Header />
        </div>
        <div className='navbar'>
          <Navbar />    
        </div>
        {/* <Profile /> */}
        <div className='dialogs'>
          <Dialogs />
        </div>
    </div>
  );
}

export default App;
