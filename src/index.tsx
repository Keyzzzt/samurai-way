import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, state, subscribe} from "./redux/state";

let reRender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reRender()
subscribe(reRender)