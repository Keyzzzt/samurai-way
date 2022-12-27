import "./App.css"
import { Profile } from "./components/Profile/Profile"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Dialogs } from "./components/Dialogs/Dialogs"
import { Route } from "react-router-dom"
import { StateType } from "./redux/store"

type AppProps = {
  state: StateType
}

function App({ state }: AppProps) {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="profile">
        <Route
          path="/dialogs"
          render={() => <Dialogs />}
        />
        <Route
          path="/profile"
          render={() => <Profile />}
        />
      </div>
    </div>
  )
}

export default App
