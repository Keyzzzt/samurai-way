import './App.css'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {Dialogs} from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import {ActionType, StateType} from './redux/state';

type AppProps = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App({state, dispatch}: AppProps) {
    return (
        <div className="app">
            <div className="header">
                <Header/>
            </div>
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="profile">
                <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage} dispatch={dispatch}/>}/>
                <Route path="/profile" render={() => <Profile state={state.profilePage} dispatch={dispatch}/>}/>
            </div>
        </div>
    )
}

export default App
