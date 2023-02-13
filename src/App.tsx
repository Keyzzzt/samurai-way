import "./App.css"
import { Profile } from "./components/Profile/Profile"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Route } from "react-router-dom"
import { StateType } from "./redux/store"
import { DialogsContainer } from "./components/Dialogs/DialogsContainer"
import { UsersContainer } from "./components/Users/UsersAPI"
import { ProfileContainer } from "./components/Profile/ProfileContainer"
import { HeaderContainer } from "./components/Header/HeaderContainer"

type AppProps = {
  state: StateType
}

function App({ state }: AppProps) {
  return (
    <div className="app">
      <div className="header">
        <HeaderContainer />
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
          path="/profile/:userId"
          render={() => <ProfileContainer />}
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
