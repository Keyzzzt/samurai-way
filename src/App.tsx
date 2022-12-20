import './App.css'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {StateType} from './redux/state';

export type PostsType = Array<{ id: number, message: string, likesCount: number }>
export type DialogsType = Array<{ id: number, name: string }>
export type MessagesType = Array<{ id: number, message: string }>

type AppProps = {
    state: StateType
}

function App({state}: AppProps) {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="header">
                    <Header/>
                </div>
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="profile">
                    {/* <Route path='/dialogs' component={Dialogs} />
                        <Route path='/profile' component={Profile} /> */}

                    <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile state={state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App
