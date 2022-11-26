import React from "react"
import "./App.css"
import { Profile } from "./components/Profile/Profile"
import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Dialogs } from "./components/Dialogs/Dialogs"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
          <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="profile">
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
      </div>
    </div>
    </BrowserRouter>

  )
}

export default App
