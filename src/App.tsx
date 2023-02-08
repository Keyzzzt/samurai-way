import "./App.css"
import { Profile } from "./components/Profile/Profile"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Route } from "react-router-dom"
import { StateType } from "./redux/store"
import { DialogsContainer } from "./components/Dialogs/DialogsContainer"
import { UsersContainer } from "./components/Users/Users"

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
          render={() => <DialogsContainer />}
        />
        <Route
          path="/profile"
          render={() => <Profile />}
        />
                <Route
          path="/users"
          render={() => <UsersContainer />}
        />
      </div>
    </div>
  )
}

export default App
