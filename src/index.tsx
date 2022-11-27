import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
    {id: 1, message: 'Hello, I\'m frontend developer!', likesCount: 4},
    {id: 2, message: 'I also familiar with backend!', likesCount: 44},
    {id: 3, message: 'When I start work for you?', likesCount: 444},
]
const dialogs = [
    {id: 1, name: 'Mark'},
    {id: 2, name: 'Igor'},
    {id: 3, name: 'Kote'},
]
const messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hola'},
    {id: 3, message: 'Hej'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);