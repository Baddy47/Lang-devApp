import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/Store";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();