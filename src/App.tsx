import React from "react"
import "./App.css"
import { Profile } from "./components/Profile/Profile"
import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Dialogs } from "./components/Dialogs/Dialogs"
import { Route } from "react-router-dom"

function App() {
  return (
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

        {/* <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/profile" render={() => <Profile />} /> */}
      </div>
    </div>
  )
}

export default App
