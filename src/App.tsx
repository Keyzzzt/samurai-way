import React from 'react'
import './App.css'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'

export type PostsType = Array<{ id: number, message: string, likesCount: number }>
export type DialogsType = Array<{ id: number, name: string }>
export type MessagesType = Array<{ id: number, message: string }>

type AppProps = {
    posts: PostsType
    dialogs: DialogsType
    messages: MessagesType
}

function App({posts, dialogs, messages}: AppProps) {
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

                    <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path="/profile" render={() => <Profile posts={posts}/>}/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App
