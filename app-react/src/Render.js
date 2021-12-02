import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewPostText, updateNewMessageText} from "./redux/Store";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
};