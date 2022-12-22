import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./redux/state";

let reRender = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} newPostTextHandler={store.newPostTextHandler.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reRender(store.getState())
store.subscribe(reRender)