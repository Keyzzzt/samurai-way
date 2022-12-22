import './App.css'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {Dialogs} from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import {StateType} from './redux/state';

export type PostsType = Array<{ id: number, message: string, likesCount: number }>
export type DialogsType = Array<{ id: number, name: string }>
export type MessagesType = Array<{ id: number, message: string }>
type AppProps = {
    state: StateType
    addPost: () => void
    newPostTextHandler: (value: string) => void
}

function App({state, addPost, newPostTextHandler}: AppProps) {
    return (
        <div className="app">
            <div className="header">
                <Header/>
            </div>
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="profile">
                <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile state={state.profilePage} addPost={addPost} newPostTextHandler={newPostTextHandler}/>}/>
            </div>
        </div>
    )
}

export default App
